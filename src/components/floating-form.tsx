"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import * as XLSX from "xlsx"

export function FloatingForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 30000) // Show form after 30 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create worksheet from form data
    const ws = XLSX.utils.json_to_sheet([formData])
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Responses")

    // Save to file
    XLSX.writeFile(wb, "form-responses.xlsx")

    toast.success("Thank you for your submission!")
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed bottom-4 right-4 w-full max-w-md z-50"
              >
                <div className="relative glass-effect border border-blue-500/20 rounded-xl p-6 shadow-2xl shadow-blue-500/10">
                  <div className="absolute -top-2 -right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <h2 className="text-2xl font-bold gradient-text mb-4">Get in Touch</h2>
                    <p className="text-blue-300/80 mb-6">
                      We'd love to hear from you! Share your thoughts or questions with us.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-blue-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-blue-950/20 border-blue-500/20 text-blue-300 placeholder:text-blue-300/50 focus:border-blue-500"
                          placeholder="Enter your name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-blue-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="bg-blue-950/20 border-blue-500/20 text-blue-300 placeholder:text-blue-300/50 focus:border-blue-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-blue-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-blue-950/20 border-blue-500/20 text-blue-300 placeholder:text-blue-300/50 focus:border-blue-500 min-h-[100px]"
                          placeholder="Your message here..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium glow-effect"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  )
}

