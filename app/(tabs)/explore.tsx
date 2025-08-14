import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Eye, Layers, Zap, Droplets, Thermometer, Wifi, ChevronRight } from 'lucide-react-native';
import Header from '@/components/Header';

const { width } = Dimensions.get('window');

interface Room {
  id: string;
  name: string;
  description: string;
  systems: string[];
}

const rooms: Room[] = [
  {
    id: '1',
    name: 'Living Room',
    description: 'Main living space with integrated smart systems',
    systems: ['Electrical', 'HVAC', 'Smart Home', 'Insulation'],
  },
  {
    id: '2',
    name: 'Kitchen',
    description: 'Modern kitchen with built-in appliances and utilities',
    systems: ['Electrical', 'Plumbing', 'HVAC', 'Smart Home'],
  },
  {
    id: '3',
    name: 'Master Bedroom',
    description: 'Primary bedroom with climate control',
    systems: ['Electrical', 'HVAC', 'Insulation', 'Smart Home'],
  },
  {
    id: '4',
    name: 'Bathroom',
    description: 'Full bathroom with modern fixtures',
    systems: ['Electrical', 'Plumbing', 'HVAC', 'Ventilation'],
  },
];

export default function ExploreScreen() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  const getSystemIcon = (system: string) => {
    switch (system) {
      case 'Electrical':
        return <Zap size={20} color="#2D2D2D" strokeWidth={2} />;
      case 'Plumbing':
        return <Droplets size={20} color="#2D2D2D" strokeWidth={2} />;
      case 'HVAC':
        return <Thermometer size={20} color="#2D2D2D" strokeWidth={2} />;
      case 'Smart Home':
        return <Wifi size={20} color="#2D2D2D" strokeWidth={2} />;
      case 'Insulation':
        return <Layers size={20} color="#2D2D2D" strokeWidth={2} />;
      case 'Ventilation':
        return <Eye size={20} color="#2D2D2D" strokeWidth={2} />;
      default:
        return <Layers size={20} color="#2D2D2D" strokeWidth={2} />;
    }
  };

  const renderRoomDetail = (room: Room) => (
    <View style={styles.roomDetail}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => setSelectedRoom(null)}
      >
        <Text style={styles.backButtonText}>← Back to Rooms</Text>
      </TouchableOpacity>
      
      <View style={styles.roomHeader}>
        <Text style={styles.roomTitle}>{room.name}</Text>
        <Text style={styles.roomDescription}>{room.description}</Text>
      </View>

      <View style={styles.virtualTourCard}>
        <Eye size={32} color="#CAF2CE" strokeWidth={2} />
        <Text style={styles.virtualTourTitle}>3D Virtual Tour</Text>
        <Text style={styles.virtualTourSubtitle}>
          Explore this room in 3D and see behind the walls
        </Text>
        <TouchableOpacity style={styles.tourButton}>
          <Text style={styles.tourButtonText}>Start Virtual Tour</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.systemsSection}>
        <Text style={styles.systemsTitle}>Systems in This Room</Text>
        {room.systems.map((system, index) => (
          <TouchableOpacity key={index} style={styles.systemCard}>
            <View style={styles.systemIcon}>
              {getSystemIcon(system)}
            </View>
            <View style={styles.systemInfo}>
              <Text style={styles.systemName}>{system}</Text>
              <Text style={styles.systemStatus}>View Details</Text>
            </View>
            <ChevronRight size={20} color="#8A8A8A" strokeWidth={2} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.wallSection}>
        <Text style={styles.wallTitle}>Wall Construction</Text>
        <View style={styles.wallCard}>
          <Layers size={24} color="#2D2D2D" strokeWidth={2} />
          <View style={styles.wallInfo}>
            <Text style={styles.wallName}>VEEV Panel System</Text>
            <Text style={styles.wallDescription}>
              Pre-fabricated panels with integrated systems, insulation, and structural elements
            </Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.xrayButton}>
          <Eye size={20} color="#FFFFFF" strokeWidth={2} />
          <Text style={styles.xrayButtonText}>X-Ray View: See Inside Walls</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {selectedRoom ? (
          renderRoomDetail(selectedRoom)
        ) : (
          <>
            {/* Hero Section */}
            <View style={styles.heroSection}>
              <Eye size={48} color="#2D2D2D" strokeWidth={2} />
              <Text style={styles.heroTitle}>Explore Your Home</Text>
              <Text style={styles.heroSubtitle}>
                Take a virtual 3D tour and discover what's behind your walls
              </Text>
            </View>

            {/* Quick Tour Button */}
            <TouchableOpacity style={styles.quickTourButton}>
              <View style={styles.quickTourContent}>
                <Eye size={24} color="#CAF2CE" strokeWidth={2} />
                <View style={styles.quickTourText}>
                  <Text style={styles.quickTourTitle}>Full Home Tour</Text>
                  <Text style={styles.quickTourSubtitle}>Complete 3D walkthrough</Text>
                </View>
                <ChevronRight size={20} color="#E6EFE6" strokeWidth={2} />
              </View>
            </TouchableOpacity>

            {/* Room Selection */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Explore by Room</Text>
              <View style={styles.roomGrid}>
                {rooms.map((room) => (
                  <TouchableOpacity
                    key={room.id}
                    style={styles.roomCard}
                    onPress={() => setSelectedRoom(room)}
                  >
                    <Text style={styles.roomName}>{room.name}</Text>
                    <Text style={styles.roomSystems}>
                      {room.systems.length} systems
                    </Text>
                    <ChevronRight size={16} color="#8A8A8A" strokeWidth={2} />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Features */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Exploration Features</Text>
              <View style={styles.featureCard}>
                <Layers size={24} color="#2D2D2D" strokeWidth={2} />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>X-Ray Vision</Text>
                  <Text style={styles.featureDescription}>
                    See through walls to view electrical, plumbing, and HVAC systems
                  </Text>
                </View>
              </View>
              <View style={styles.featureCard}>
                <Eye size={24} color="#2D2D2D" strokeWidth={2} />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>3D Navigation</Text>
                  <Text style={styles.featureDescription}>
                    Walk through your home with realistic 3D rendering
                  </Text>
                </View>
              </View>
              <View style={styles.featureCard}>
                <Zap size={24} color="#2D2D2D" strokeWidth={2} />
                <View style={styles.featureContent}>
                  <Text style={styles.featureTitle}>System Information</Text>
                  <Text style={styles.featureDescription}>
                    Tap on any system to learn about its specifications and maintenance
                  </Text>
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  heroSection: {
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#FFFFFF',
    margin: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  heroTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#2D2D2D',
    marginTop: 16,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
    textAlign: 'center',
    lineHeight: 22,
  },
  quickTourButton: {
    backgroundColor: '#3D3D3D',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  quickTourContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quickTourText: {
    flex: 1,
    marginLeft: 16,
  },
  quickTourTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#CAF2CE',
    marginBottom: 4,
  },
  quickTourSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#E0E0E0',
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 16,
  },
  roomGrid: {
    gap: 12,
  },
  roomCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  roomName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    flex: 1,
  },
  roomSystems: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
    marginRight: 8,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  featureContent: {
    flex: 1,
    marginLeft: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
    lineHeight: 20,
  },
  // Room Detail Styles
  roomDetail: {
    padding: 20,
  },
  backButton: {
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#2D2D2D',
  },
  roomHeader: {
    marginBottom: 24,
  },
  roomTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#2D2D2D',
    marginBottom: 8,
  },
  roomDescription: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
    lineHeight: 22,
  },
  virtualTourCard: {
    backgroundColor: '#3D3D3D',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  virtualTourTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#CAF2CE',
    marginTop: 12,
    marginBottom: 8,
  },
  virtualTourSubtitle: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#E0E0E0',
    textAlign: 'center',
    marginBottom: 20,
  },
  tourButton: {
    backgroundColor: '#CAF2CE',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  tourButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
  },
  systemsSection: {
    marginBottom: 24,
  },
  systemsTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 16,
  },
  systemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  systemIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  systemInfo: {
    flex: 1,
  },
  systemName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 2,
  },
  systemStatus: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
  },
  wallSection: {
    marginBottom: 24,
  },
  wallTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 16,
  },
  wallCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  wallInfo: {
    flex: 1,
    marginLeft: 12,
  },
  wallName: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#2D2D2D',
    marginBottom: 4,
  },
  wallDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#8A8A8A',
    lineHeight: 20,
  },
  xrayButton: {
    backgroundColor: '#3D3D3D',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xrayButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#CAF2CE',
    marginLeft: 8,
  },
});