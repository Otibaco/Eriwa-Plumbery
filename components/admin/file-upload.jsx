"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, ImageIcon, Video, File, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"



export function FileUpload({
  onFileUpload,
  maxFiles = 5,
  maxSize = 10,
  acceptedTypes = ["image/*", "video/*"],
  className,
}) {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newFiles = acceptedFiles.slice(0, maxFiles - uploadedFiles.length).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        progress: 0,
        status: "uploading",
        id: Math.random().toString(36).substr(2, 9),
      }))

      setUploadedFiles((prev) => [...prev, ...newFiles])
      setIsUploading(true)

      // Simulate file upload with progress
      newFiles.forEach((uploadFile) => {
        simulateUpload(uploadFile.id)
      })

      onFileUpload?.(acceptedFiles)
    },
    [maxFiles, uploadedFiles.length, onFileUpload],
  )

  const simulateUpload = (fileId) => {
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
        setUploadedFiles((prev) =>
          prev.map((file) => (file.id === fileId ? { ...file, progress: 100, status: "success" } : file)),
        )
        setIsUploading(false)
      } else {
        setUploadedFiles((prev) => prev.map((file) => (file.id === fileId ? { ...file, progress } : file)))
      }
    }, 200)
  }

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === fileId)
      if (fileToRemove) {
        URL.revokeObjectURL(fileToRemove.preview)
      }
      return prev.filter((f) => f.id !== fileId)
    })
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce(
      (acc, type) => {
        acc[type] = []
        return acc
      },
      {},
    ),
    maxSize: maxSize * 1024 * 1024,
    maxFiles: maxFiles - uploadedFiles.length,
    disabled: uploadedFiles.length >= maxFiles,
  })

  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) return <ImageIcon className="w-5 h-5" />
    if (file.type.startsWith("video/")) return <Video className="w-5 h-5" />
    return <File className="w-5 h-5" />
  }

  return (
    <div className={cn("space-y-4", className)}>
      {/* Upload Area */}
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
          uploadedFiles.length >= maxFiles && "opacity-50 cursor-not-allowed",
        )}
      >
        <input {...getInputProps()} />
        <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
        {isDragActive ? (
          <p className="text-primary font-medium">Drop the files here...</p>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground mb-2">Drag and drop files here, or click to browse</p>
            <p className="text-xs text-muted-foreground">
              Supports images and videos up to {maxSize}MB ({uploadedFiles.length}/{maxFiles} files)
            </p>
          </div>
        )}
        {uploadedFiles.length < maxFiles && (
          <Button type="button" variant="outline" size="sm" className="mt-4 bg-transparent">
            Choose Files
          </Button>
        )}
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium">Uploaded Files</h4>
          {uploadedFiles.map((uploadedFile) => (
            <Card key={uploadedFile.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  {/* File Preview */}
                  <div className="flex-shrink-0">
                    {uploadedFile.file.type.startsWith("image/") ? (
                      <img
                        src={uploadedFile.preview || "/placeholder.svg"}
                        alt={uploadedFile.file.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        {getFileIcon(uploadedFile.file)}
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{uploadedFile.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>

                    {/* Progress Bar */}
                    {uploadedFile.status === "uploading" && (
                      <div className="mt-2">
                        <Progress value={uploadedFile.progress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">
                          {Math.round(uploadedFile.progress)}% uploaded
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center space-x-2">
                    {uploadedFile.status === "success" && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {uploadedFile.status === "error" && <AlertCircle className="w-5 h-5 text-red-600" />}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(uploadedFile.id)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
