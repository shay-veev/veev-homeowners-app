import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Chrome as HomeIcon, Calendar, Wrench, Shield, Thermometer, Zap } from 'lucide-react-native';
import Header from '@/components/Header';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Welcome Section */}
        <LinearGradient
          colors={['#1A3A39', '#012827']}
          style={styles.welcomeCard}
        >
          <View style={styles.welcomeContent}>
            <HomeIcon size={32} color="#E6EFE6" strokeWidth={2} />
            <Text style={styles.welcomeTitle}>Welcome Home</Text>
            <Text style={styles.welcomeSubtitle}>
              Your VEEV home is ready and performing optimally
            </Text>
          </View>
        </LinearGradient>

        {/* Home Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Home Details</Text>
          <View style={styles.detailsGrid}>
            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Model</Text>
              <Text style={styles.detailValue}>VEEV Modern 2BR</Text>
            </View>
            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Square Footage</Text>
              <Text style={styles.detailValue}>1,250 sq ft</Text>
            </View>
            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Completion Date</Text>
              <Text style={styles.detailValue}>March 15, 2024</Text>
            </View>
            <View style={styles.detailCard}>
              <Text style={styles.detailLabel}>Warranty</Text>
              <Text style={styles.detailValue}>10 Years</Text>
            </View>
          </View>
        </View>

        {/* System Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>System Status</Text>
          <View style={styles.statusGrid}>
            <View style={styles.statusCard}>
              <Thermometer size={24} color="#4ADE80" strokeWidth={2} />
              <Text style={styles.statusLabel}>Climate</Text>
              <Text style={styles.statusValue}>72°F</Text>
              <Text style={styles.statusStatus}>Optimal</Text>
            </View>
            <View style={styles.statusCard}>
              <Zap size={24} color="#4ADE80" strokeWidth={2} />
              <Text style={styles.statusLabel}>Energy</Text>
              <Text style={styles.statusValue}>85%</Text>
              <Text style={styles.statusStatus}>Efficient</Text>
            </View>
            <View style={styles.statusCard}>
              <Shield size={24} color="#4ADE80" strokeWidth={2} />
              <Text style={styles.statusLabel}>Security</Text>
              <Text style={styles.statusValue}>Active</Text>
              <Text style={styles.statusStatus}>Protected</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionCard}>
            <Calendar size={20} color="#E6EFE6" strokeWidth={2} />
            <Text style={styles.actionText}>Schedule Maintenance</Text>
          </View>
          <View style={styles.actionCard}>
            <Wrench size={20} color="#E6EFE6" strokeWidth={2} />
            <Text style={styles.actionText}>Request Service</Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityCard}>
            <View style={styles.activityDot} />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>System Check Completed</Text>
              <Text style={styles.activityTime}>2 hours ago</Text>
            </View>
          </View>
          <View style={styles.activityCard}>
            <View style={styles.activityDot} />
            <View style={styles.activityContent}>
              <Text style={styles.activityTitle}>Energy Report Generated</Text>
              <Text style={styles.activityTime}>1 day ago</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012827',
  },
  content: {
    flex: 1,
    backgroundColor: '#F8FFFE',
  },
  welcomeCard: {
    margin: 20,
    borderRadius: 16,
    padding: 24,
  },
  welcomeContent: {
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: '#E6EFE6',
    marginTop: 12,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#B8D4B8',
    textAlign: 'center',
    lineHeight: 22,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#012827',
    marginBottom: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: (width - 52) / 2,
    borderWidth: 1,
    borderColor: '#E5F3E5',
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#7A9B7A',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#012827',
  },
  statusGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statusCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5F3E5',
  },
  statusLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#7A9B7A',
    marginTop: 8,
    marginBottom: 4,
  },
  statusValue: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: '#012827',
    marginBottom: 2,
  },
  statusStatus: {
    fontSize: 12,
    fontFamily: 'Inter-Medium',
    color: '#4ADE80',
  },
  actionCard: {
    backgroundColor: '#012827',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#E6EFE6',
    marginLeft: 12,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5F3E5',
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4ADE80',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#012827',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#7A9B7A',
  },
});