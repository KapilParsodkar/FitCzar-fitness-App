import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
  Text,
  Container,
  Table,
} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
// For fielding data passed from Login
import { useLocation } from "react-router-dom"
import './exercise.css'


const Profile = ({setLoginUser}) => {
  const nav = useNavigate();
  const [post, setPost] = useState([])
  // To capture data from Login
//  const location = useLocation();

  // Data set on this page
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnits, setHeightUnits] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnits, setWeightUnits] = useState('kg');
  const [phoneNumber, setPhone] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [workoutHistory, setWorkoutHistory] = useState('');

  // Will want to pull this list from a database rather than hard-coding it here
  const allGoals = ["Muscle gain", "Weight loss", "Flexibility", "Aerobic endurance", "Mobility", "Health maintenance"];
  const [myGoals, setGoals] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3003/profile")
 
    .then((response) => {
      setPost(response.data);
    });
  }, []);

  // Pressing a button in a form fires the Submit event for that form.
  // Therefore, this runs when the user clicks the Enter button.
  // Write user profile data to storage
  const updateBiometrics = (e) => {
    // Prevent page refresh (that's the default action)
    e.preventDefault();
    // The biometrics
    const biometrics = {"firstName": firstName,
                        "lastName": lastName,
                        "phoneNumber": phoneNumber,
                        "age": age,
                        "gender": gender,
                        "height": height,
                        "heightUnits": heightUnits,
                        "weight": weight,
                        "weightUnits": weightUnits,
                        "fitnessGoals": [],
                        "medicalConditions": [],
                        "dietaryRestrictions": [],
                        "workoutHistory": []
                        }
    // Add them to the list of user profiles (profiles.json)

    axios.post("http://localhost:3003/signup", biometrics)
      .then(res => {
        alert(res.data.message);
        nav("/exercisehome")
      })
      .catch(err => {
        alert(err);
      });

  }


  // Message to display while waiting
  if (!post) return <div>Loading...</div>;


  // Render the page
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <Text fontSize="6xl">Profile</Text>
      <p>Please provide your data and physiological profile.</p>
      <p>You’ll be able to update this information at any time.</p>

      <VStack>

{ 
      <table border={'122px'}>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {post.map(i => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
            </tr>
          )
        })}
      </table>
}    

      {/* Input controls to collect user profile data */}
      <div className="firstName">
        <input
          value={ firstName }
          type="string"
          placeholder="enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="lastName">
        <input
          value={ lastName }
          type="string"
          placeholder="enter last name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="age">
        <input
          required
          value={ age }
          type="integer"
          placeholder='age (years)'
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="gender">
        <select onChange={(e) => setGender(e.target.value)}>
          <option value="default" disabled hidden>select gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='non-binary'>Non-binary</option>
        </select>
      </div>

      <div className="height">
        <input
          required
          value={ height }
          type="integer"
          placeholder='height'
          onChange={(e) => setHeight(e.target.value)}
        />
        <select onChange={(e) => setHeightUnits(e.target.value)}>
          <option value='cm'>cm</option>
          <option value='in'>inches</option>
        </select>
      </div>

      <div className="weight">
        <input
          required
          value={ weight }
          type="integer"
          placeholder='weight'
          onChange={(e) => setWeight(e.target.value)}
        />
        <select onChange={(e) => setWeightUnits(e.target.value)}>
          <option value='kg'>kg</option>
          <option value='lbs'>pounds</option>
          </select>
        </div>

        <div className="phoneNumber">
          <input
            value={ phoneNumber }
            type="string"
            onChange={(e) => setPhone(e.target.value)}
            placeholder='mobile phone'
          />
        </div>

        <div className="fitnessGoals">
          <select onChange={(e) => setFitnessGoals(e.target.value)}>
            <option value="default" disabled hidden>select fitness goals</option>
            <option value='weight-loss'>Weight loss</option>
            <option value='muscle-gain'>Muscle gain</option>
            <option value='cardiovascular-health'>Cardiovascular health</option>
            <option value='flexibility'>Flexibility</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className="medicalConditions">
          <select onChange={(e) => setMedicalConditions(e.target.value)}>
            <option value="default" disabled hidden>select any known health issues</option>
            <option value='diabetes'>Diabetes</option>
            <option value='high-blood-pressure'>High blood pressure</option>
            <option value='asthma'>Asthma</option>
            <option value='arthritis'>Arthritis</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className="dietaryRestrictions">
          <select onChange={(e) => setDietaryRestrictions(e.target.value)}>
            <option value="default" disabled hidden>select any dietary restrictions</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='vegan'>Vegan</option>
            <option value='gluten-free'>Gluten-free</option>
            <option value='dairy-free'>Dairy-free</option>
            <option value='pescatarian'>Pescatarian</option>
            <option value='other'>Other</option>
          </select>
        </div>

        <div className="workoutHistory">
          <select onChange={(e) => setWorkoutHistory(e.target.value)}>
            <option value="default" disabled hidden>select exercise level</option>
            <option value='never-worked-out'>Beginner</option>
            <option value='occasionally'>Occasional exercise</option>
            <option value='regularly'>Regular exercise</option>
            <option value='athlete'>Athlete</option>
          </select>
        </div>

        <div className="button" onClick={() => nav("/exercisehome")}>
          Update Profile
        </div>


        <div className="button" onClick={() => nav("/exercisehome")}>
          ExerciseHome
        </div>

      </VStack>

    </Container>
  );
};

export default Profile;