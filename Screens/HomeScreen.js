import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { EmailAuthCredential } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const profiles = [
  {
    id: 1,
    name: 'Aayush Modi',
    position: 'Scrum Master',
    image: 'https://picsum.photos/id/237/200/300'
  },
  {
    id: 2,
    name: 'Leah Arp',
    position: 'Product Owner',
    image: 'https://picsum.photos/id/275/200/300'
  },
  {
    id: 3,
    name: 'Jensen Gomez',
    position: 'Software Developer',
    image: 'https://picsum.photos/id/239/200/300'
  }
];

const ProfileCard = ({ name, position, image }) => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={{ uri: image }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profilePosition}>{position}</Text>
      </View>
    </View>
  );
};

const NavBar = () => {
  const navigation = useNavigation();
return (
  <View style={styles.navBar}>
    <Ionicons name="home-outline" size={28} color="#000"
    onPress={() => navigation.navigate('HomeScreen')} />
    <Ionicons name="people-outline" size={28} color="#000"
    onPress={() => navigation.navigate('MatchScreen')} />
    <Ionicons name="bar-chart-outline" size={28} color="#000" />
    <Ionicons name="chatbubble-ellipses-outline" size={28} color="#000" />
    <Ionicons name="person-outline" size={28} color="#000" />
  </View>
);
}// change icons on tap

const HomeScreen = () => {
  return (
    
    
    <View style={styles.container}>
       <Text style = {styles.header}>Welcome! Here are your top matches of the week </Text>
      <NavBar />
      <ScrollView contentContainerStyle={styles.profileList}>
        {profiles.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            position={profile.position}
            image={profile.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 60,
    textAlign: 'center'
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#00000',
    backgroundColor: 'rgb(244, 244, 244)'
  },
  profileList: {
    marginTop: 60,
    flexGrow: 1,
    justifyContent: 'left',
    padding: 10
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    marginBottom: 16,
    flexDirection: 'row'
  },
  imageContainer: {
    marginRight: 16
  },
  textContainer: {
    flex: 1,
    justifyContent: 'left'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
    marginBottom: 16,
   
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    textAlign: 'left'
  },
  profilePosition: {
    fontSize: 16,
    color: '#666',
    textAlign: 'left'
  }
});

export default HomeScreen;
