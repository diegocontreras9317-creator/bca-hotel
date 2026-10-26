import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { TerracePage } from './pages/TerracePage';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RoomModal } from './components/RoomModal';
import { BookingModal } from './components/BookingModal';
import { Room } from './types/hotel';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);

  // Sync state with URL hash for browser history & navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'habitaciones' || hash === 'habitacion') {
        setCurrentPage('habitaciones');
      } else if (hash === 'terraza') {
        setCurrentPage('terraza');
      } else if (hash === 'inicio' || hash === '') {
        setCurrentPage('inicio');
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenBookingModal = (roomId?: string) => {
    setPreselectedRoomId(roomId);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#FAF8F5] flex flex-col font-sans selection:bg-[#FAF8F5] selection:text-[#0C0C0C]">
      {/* Navigation Header across all pages */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Main Distinct Page Content Area */}
      <main className="flex-1 bg-[#F7F4EE] text-[#0C0C0C]">
        {currentPage === 'inicio' && (
          <HomePage
            onOpenBookingModal={handleOpenBookingModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'habitaciones' && (
          <RoomsPage
            onSelectRoom={(room) => setSelectedRoom(room)}
            onOpenBookingModal={handleOpenBookingModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'terraza' && (
          <TerracePage
            onOpenBookingModal={() => handleOpenBookingModal()}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Interactive Room Details & Gallery Modal */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}

      {/* Interactive Booking / Quote Generator Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomId={preselectedRoomId}
      />
    </div>
  );
}
