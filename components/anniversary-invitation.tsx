"use client"

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BookPage } from './book-page'
import { Heart, Calendar, MapPin, Clock, Sparkles, Star, Flower2, ArrowRight, ArrowLeft, X } from 'lucide-react'

export function AnniversaryInvitation() {
  const [currentPage, setCurrentPage] = useState(0) // Corrigido: começar na página 0
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string
    alt: string
    title: string
    subtitle: string
  } | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  const openPhotoModal = (photo: {
    src: string
    alt: string
    title: string
    subtitle: string
  }) => {
    console.log('Opening photo modal:', photo)
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const closePhotoModal = () => {
    console.log('Closing photo modal')
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  const nextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Posições fixas para os corações flutuantes para evitar problemas de hidratação
  const floatingHearts = [
    { left: "15%", top: "66%", delay: "0.8s", duration: "5s" },
    { left: "23%", top: "41%", delay: "0.7s", duration: "4.7s" },
    { left: "93%", top: "69%", delay: "1.4s", duration: "3.5s" },
    { left: "85%", top: "94%", delay: "1.4s", duration: "4.4s" },
    { left: "73%", top: "67%", delay: "1.4s", duration: "4.4s" },
    { left: "45%", top: "25%", delay: "0.5s", duration: "4.2s" },
    { left: "67%", top: "35%", delay: "1.1s", duration: "3.8s" },
    { left: "12%", top: "85%", delay: "0.9s", duration: "4.6s" },
    { left: "89%", top: "15%", delay: "1.2s", duration: "3.9s" },
    { left: "33%", top: "78%", delay: "0.6s", duration: "4.1s" },
    { left: "78%", top: "55%", delay: "1.0s", duration: "4.3s" },
    { left: "56%", top: "12%", delay: "1.3s", duration: "3.7s" },
    { left: "22%", top: "18%", delay: "0.8s", duration: "4.5s" },
    { left: "91%", top: "82%", delay: "1.1s", duration: "3.6s" },
    { left: "8%", top: "45%", delay: "0.7s", duration: "4.0s" },
    { left: "95%", top: "38%", delay: "1.0s", duration: "3.8s" },
    { left: "41%", top: "92%", delay: "0.9s", duration: "4.2s" },
    { left: "62%", top: "8%", delay: "1.2s", duration: "3.9s" },
    { left: "17%", top: "72%", delay: "0.6s", duration: "4.4s" },
    { left: "88%", top: "28%", delay: "1.3s", duration: "3.7s" }
  ]

  // Não renderizar até que o componente esteja montado no cliente
  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-rose-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Floating hearts com posições fixas */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: heart.left,
              top: heart.top,
              animationDelay: heart.delay,
              animationDuration: heart.duration
            }}
          >
            <Heart className="w-4 h-4 text-rose-300/60 fill-current" />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 overflow-hidden">
        <div className="w-full max-w-7xl h-[85vh] sm:h-[80vh] min-h-[500px] sm:min-h-[600px] relative overflow-y-auto">
          <BookPage isVisible={currentPage === 0} className="bg-gradient-to-br from-white via-rose-50/50 to-white">
            <div className="text-center space-y-6 sm:space-y-8 h-full flex flex-col justify-center p-3 sm:p-4 md:p-6 lg:p-8 relative overflow-y-auto">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-20">
                <Flower2 className="w-12 h-12 sm:w-16 sm:h-16 text-rose-300" />
              </div>
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-20">
                <Star className="w-12 h-12 sm:w-16 sm:h-16 text-purple-300" />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 opacity-20">
                <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-pink-300" />
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 opacity-20">
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-300" />
              </div>

                              <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 blur-2xl opacity-30"></div>
                    <Heart className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 text-rose-500 mx-auto fill-current animate-pulse" />
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 md:space-y-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight px-2">
                      Dois Anos de Amor
                    </h1>
                    
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-400 blur-xl opacity-20"></div>
                      <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 font-medium px-2 sm:px-4">
                        Uma celebração especial para nossa jornada de amor
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 blur-lg opacity-30"></div>
                      <p className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent px-2 sm:px-4">
                        Maria Isabel ❤️
                      </p>
                    </div>
                  </div>

                <div className="max-w-3xl sm:max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 px-2 sm:px-4">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 leading-relaxed font-light">
                    Há dois anos você entrou na minha vida e transformou cada dia em uma página especial da nossa história
                    de amor. Cada momento ao seu lado é um presente que guardo no coração.
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl text-rose-500">
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current" />
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current" />
                    <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current" />
                  </div>
                </div>

                <Button
                  onClick={nextPage}
                  className="group relative bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 text-base sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-full shadow-xl sm:shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center gap-2 sm:gap-3">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current animate-pulse" />
                    <span className="hidden sm:inline">Abrir Nosso Livro de Amor</span>
                    <span className="sm:hidden">Abrir Livro</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Button>
              </div>
            </div>
          </BookPage>

          <BookPage isVisible={currentPage === 1} className="bg-gradient-to-br from-white via-pink-50/50 to-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center h-full p-3 sm:p-4 md:p-6 lg:p-8 pb-20 sm:pb-24 md:pb-28 lg:pb-32 relative overflow-y-auto">
              <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 order-2 lg:order-1">
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Minha Querida Maria Isabel
                  </h2>
                  
                  <div className="space-y-3 sm:space-y-4 md:space-y-6 text-gray-700">
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light">
                      Você é a pessoa mais especial que já conheci. Sua risada ilumina meus dias, seu carinho aquece meu
                      coração e seu amor me faz querer ser uma pessoa melhor a cada dia.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
                      Nesses dois anos juntos, construímos memórias preciosas, superamos desafios de mãos dadas e
                      descobrimos que o amor verdadeiro existe e está bem aqui, entre nós.
                    </p>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-400 blur-lg opacity-20"></div>
                      <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                        Você é minha melhor amiga, minha companheira de aventuras, minha paz nos momentos difíceis e minha
                        alegria em todos os momentos. Te amo mais do que as palavras podem expressar.
                      </p>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light">
                      Obrigado por escolher caminhar ao meu lado, por me amar do jeito que sou e por tornar cada dia uma
                      nova razão para sorrir. Você é o amor da minha vida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center order-1 lg:order-2">
                <Card className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 shadow-xl sm:shadow-2xl border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 to-purple-200/20"></div>
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl">
                      <img
                        src="/0.jpg"
                        alt="Foto do casal"
                        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                        onClick={() => openPhotoModal({ src: "/0.jpg", alt: "Foto do casal", title: "Nossa primeira foto juntos ❤️", subtitle: "Nossa primeira foto juntos ❤️" })}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div className="text-center mt-3 sm:mt-4 md:mt-6">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                        Nossa primeira foto juntos ❤️
                      </p>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-rose-500 fill-current" />
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-pink-500 fill-current" />
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-500 fill-current" />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-3 sm:left-4 md:left-6 lg:left-8 right-3 sm:right-4 md:right-6 lg:right-8 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-between">
              <Button
                variant="outline"
                onClick={prevPage}
                className="group px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg border-2 border-rose-300 text-rose-600 hover:bg-rose-50 bg-white/80 backdrop-blur-sm hover:border-rose-400 transition-all duration-300 rounded-full shadow-lg order-2 sm:order-1"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                Voltar
              </Button>
              <Button 
                onClick={nextPage} 
                className="group bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 px-3 sm:px-4 md:px-6 lg:px-8 py-1.5 sm:py-2 md:py-3 lg:py-4 text-xs sm:text-sm md:text-base lg:text-lg text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full transform hover:scale-105 order-1 sm:order-2"
              >
                Próxima
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1 sm:ml-2 fill-current" />
              </Button>
            </div>
          </BookPage>

          <BookPage isVisible={currentPage === 2} className="bg-gradient-to-br from-white via-purple-50/50 to-white">
            <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
              <div className="text-center space-y-4 sm:space-y-6 mb-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent px-2">
                  Nossa História de Amor
                </h2>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 fill-current" />
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-1 mb-4 sm:mb-6 justify-center">
                {/* Primeira linha - 4 fotos */}
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img
                      src="/1.jpg"
                      alt="Primeiro encontro"
                      className="w-full h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => openPhotoModal({ src: "/1.jpg", alt: "Primeiro encontro", title: "Primeiro Encontro", subtitle: "O dia que mudou nossas vidas para sempre ✨" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-1">
                    Primeiro Encontro
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    O dia que mudou nossas vidas para sempre ✨
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img
                      src="/2.jpg"
                      alt="Primeira Beijo"
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => openPhotoModal({ src: "/2.jpg", alt: "Primeira Beijo", title: "Primeira Beijo", subtitle: "O momento mais mágico de todos 💗" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    Primeira Beijo
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    O momento mais mágico de todos 💗
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img
                      src="/4.jpg"
                      alt="Momentos especiais"
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                      onClick={() => openPhotoModal({ src: "/4.jpg", alt: "Momentos especiais", title: "Momentos Especiais", subtitle: "Jantares românticos e conversas 💫" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    Momentos Especiais
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    Jantares românticos e conversas 💫
                  </p>
                </div>

                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src="/7.jpg" 
                      alt="Aventuras juntos" 
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                      onClick={() => openPhotoModal({ src: "/7.jpg", alt: "Aventuras juntos", title: "Aventuras", subtitle: "Descobrindo o mundo juntos 🌍" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-blue-600 to-rose-600 bg-clip-text text-transparent mb-1">
                    Aventuras
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    Descobrindo o mundo juntos 🌍
                  </p>
                </div>

                {/* Segunda linha - 3 fotos centralizadas */}
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src="/6.jpg" 
                      alt="Risadas compartilhadas" 
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                      onClick={() => openPhotoModal({ src: "/6.jpg", alt: "Risadas compartilhadas", title: "Alegrias", subtitle: "Risadas que iluminam nossos dias 😊" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-1">
                    Alegrias
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    Risadas que iluminam nossos dias 😊
                  </p>
                </div>

                {/* Terceira foto - "Flores" ao lado de Alegrias */}
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src="/3.jpg" 
                      alt="Flores" 
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                      onClick={() => openPhotoModal({ src: "/3.jpg", alt: "Flores", title: "Flores", subtitle: "A flor mais linda do mundo 🌸" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1">
                    Flores
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    A flor mais linda do mundo 🌸
                  </p>
                </div>

                {/* Última foto - "Hoje" ao lado de Flores */}
                <div className="group text-center">
                  <div className="relative overflow-hidden rounded-xl shadow-lg mb-3 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <img 
                      src="/5.jpg" 
                      alt="Hoje" 
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer" 
                      onClick={() => openPhotoModal({ src: "/5.jpg", alt: "Hoje", title: "Hoje", subtitle: "Dois anos de puro amor ❤️" })}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <div className="p-2 bg-gradient-to-r from-rose-500 to-red-500 rounded-full shadow-lg">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent mb-1">
                    Hoje
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-tight px-1">
                    Dois anos de puro amor ❤️
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={prevPage}
                  className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 border-purple-300 text-purple-600 hover:bg-purple-50 bg-white/80 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 rounded-full shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Voltar
                </Button>
                <Button 
                  onClick={nextPage} 
                  className="group bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full transform hover:scale-105"
                >
                  Próxima
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 ml-2 fill-current" />
                </Button>
              </div>
            </div>
          </BookPage>

          <BookPage isVisible={currentPage === 3} className="bg-gradient-to-br from-white via-rose-50/50 to-white">
            <div className="h-full flex flex-col p-2 sm:p-4 md:p-6">
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 opacity-20">
                <Sparkles className="w-16 h-16 sm:w-20 sm:h-20 text-rose-300" />
              </div>
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 opacity-20">
                <Star className="w-16 h-16 sm:w-20 sm:h-20 text-purple-300" />
              </div>
              <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 opacity-20">
                <Flower2 className="w-16 h-16 sm:w-20 sm:h-20 text-pink-300" />
              </div>
              <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 opacity-20">
                <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-rose-300" />
              </div>

              {/* Header */}
              <div className="text-center space-y-3 sm:space-y-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 blur-2xl opacity-30"></div>
                  <Heart className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-rose-500 mx-auto fill-current animate-pulse" />
                </div>
                
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent px-2">
                  Vamos Celebrar Juntos o nosso amor!
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed font-light px-4">
                  Quero celebrar esses dois anos incríveis ao seu lado e brindar aos muitos anos que ainda virão. Você
                  toparia um jantar especial para comemorarmos nossa história de amor?
                </p>
              </div>

              {/* Event Details Card */}
              <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 max-w-6xl mx-auto shadow-lg border-0 relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-200/20 to-purple-200/20"></div>
                <div className="relative space-y-4 sm:space-y-5">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent mb-2">
                      Detalhes do Encontro
                    </h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                    <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-5 rounded-lg bg-white/80 backdrop-blur-sm shadow-md border border-rose-100/50">
                      <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full shadow-md mb-2 sm:mb-3">
                        <Calendar className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 mb-1 sm:mb-2">Data</p>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">Sexta, 5 de Setembro</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-5 rounded-lg bg-white/80 backdrop-blur-sm shadow-md border border-pink-100/50">
                      <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-md mb-2 sm:mb-3">
                        <Clock className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 mb-1 sm:mb-2">Horário</p>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base">20:30</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center text-center p-2 sm:p-4 md:p-5 rounded-lg bg-white/80 backdrop-blur-sm shadow-md border border-purple-100/50">
                      <div className="p-2 sm:p-3 md:p-4 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full shadow-md mb-2 sm:mb-3">
                        <MapPin className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 mb-1 sm:mb-2">Local</p>
                        <a 
                          href="https://maps.app.goo.gl/RatFgRg8n7b4B3Li8" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-rose-600 hover:text-rose-700 font-medium text-xs sm:text-sm md:text-base underline transition-colors duration-200"
                        >
                          Texas Grill
                        </a>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words mt-1">apenas nós dois e nosso amor!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Closing Message */}
              <div className="text-center space-y-4 sm:space-y-6 flex-1">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 px-4 font-medium">
                  Mal posso esperar para celebrar mais este marco da nossa história de amor!
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-purple-400 blur-lg opacity-30"></div>
                    <p className="relative text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                      Com todo meu amor,
                    </p>
                  </div>
                  
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                    Seu Uquinha ❤️
                  </p>
                </div>
                
                <div className="max-w-2xl mx-auto space-y-3 px-4">
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed font-light">
                    P.S.: Obrigado por fazer de cada dia uma nova razão para acreditar no amor verdadeiro. Você é e sempre
                    será o amor da minha vida, Maria Isabel.
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-500 fill-current animate-pulse" />
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 fill-current animate-pulse" style={{animationDelay: '0.5s'}} />
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 fill-current animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                </div>
              </div>

              {/* Navigation Button */}
              <div className="flex justify-center pt-4 mt-4">
                <Button
                  variant="outline"
                  onClick={prevPage}
                  className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base sm:text-lg md:text-xl border-2 border-rose-300 text-rose-600 hover:bg-rose-50 bg-white/90 backdrop-blur-sm hover:border-rose-400 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
                  Voltar
                </Button>
              </div>
            </div>
          </BookPage>
        </div>
      </div>

      {/* Modal para exibir as fotos */}
      {isModalOpen && selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999] flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[90vh] sm:max-h-[95vh]">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
              {/* Botão de fechar */}
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-20">
                <Button
                  onClick={closePhotoModal}
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full bg-white/95 hover:bg-white border-rose-200 hover:border-rose-300 text-rose-600 hover:text-rose-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </Button>
              </div>
              
              {/* Imagem principal */}
              <div className="relative">
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Informações da foto */}
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50">
                <div className="text-center space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    {selectedPhoto.title}
                  </h3>
                  <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full mx-auto"></div>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-xs sm:max-w-sm md:max-w-2xl mx-auto">
                    {selectedPhoto.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
            {/* Debug info - remover depois */}
      {isModalOpen && (
        <div className="fixed top-4 left-4 bg-green-500 text-white p-2 rounded z-[10000] font-bold">
          ✅ Modal ATIVO! Foto: {selectedPhoto?.title || 'Carregando...'}
        </div>
      )}
    </div>
  )
}
