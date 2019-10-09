/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: toggleDriving
// ====================================================

export interface toggleDriving_ToggleDrivingMode {
  __typename: "ToggleDrivingModeResponse";
  ok: boolean;
  error: string | null;
}

export interface toggleDriving {
  ToggleDrivingMode: toggleDriving_ToggleDrivingMode;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editPlace
// ====================================================

export interface editPlace_EditPlace {
  __typename: "EditPlaceResponse";
  ok: boolean;
  error: string | null;
}

export interface editPlace {
  EditPlace: editPlace_EditPlace;
}

export interface editPlaceVariables {
  placeId: number;
  isFav: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addPlace
// ====================================================

export interface addPlace_AddPlace {
  __typename: "AddPlaceResponse";
  ok: boolean;
  error: string | null;
}

export interface addPlace {
  AddPlace: addPlace_AddPlace;
}

export interface addPlaceVariables {
  name: string;
  lat: number;
  lng: number;
  address: string;
  isFav: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getChat
// ====================================================

export interface getChat_GetChat_chat_messages {
  __typename: "Message";
  id: number;
  text: string;
  userId: number;
}

export interface getChat_GetChat_chat {
  __typename: "Chat";
  id: number;
  passengerId: number;
  driverId: number;
  messages: (getChat_GetChat_chat_messages | null)[] | null;
}

export interface getChat_GetChat {
  __typename: "GetChatResponse";
  ok: boolean;
  error: string | null;
  chat: getChat_GetChat_chat | null;
}

export interface getChat {
  GetChat: getChat_GetChat;
}

export interface getChatVariables {
  chatId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: sendMessage
// ====================================================

export interface sendMessage_SendChatMessage_message {
  __typename: "Message";
  id: number;
  text: string;
  userId: number;
}

export interface sendMessage_SendChatMessage {
  __typename: "SendChatMessageResponse";
  ok: boolean;
  error: string | null;
  message: sendMessage_SendChatMessage_message | null;
}

export interface sendMessage {
  SendChatMessage: sendMessage_SendChatMessage;
}

export interface sendMessageVariables {
  text: string;
  chatId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: messageSubscription
// ====================================================

export interface messageSubscription_MessageSubscription {
  __typename: "Message";
  id: number;
  text: string;
  userId: number;
}

export interface messageSubscription {
  MessageSubscription: messageSubscription_MessageSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProfile
// ====================================================

export interface updateProfile_UpdateMyProfile {
  __typename: "UpdateMyProfileResponse";
  ok: boolean;
  error: string | null;
}

export interface updateProfile {
  UpdateMyProfile: updateProfile_UpdateMyProfile;
}

export interface updateProfileVariables {
  firstName: string;
  lastName?: string | null;
  email?: string | null;
  profilePhoto?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailSignIn
// ====================================================

export interface emailSignIn_EmailSignIn {
  __typename: "EmailSignInResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface emailSignIn {
  EmailSignIn: emailSignIn_EmailSignIn;
}

export interface emailSignInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: reportMovement
// ====================================================

export interface reportMovement_ReportMovement {
  __typename: "ReportMovementResponse";
  ok: boolean;
  error: string | null;
}

export interface reportMovement {
  ReportMovement: reportMovement_ReportMovement;
}

export interface reportMovementVariables {
  lat: number;
  lng: number;
  orientation?: number | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDrivers
// ====================================================

export interface getDrivers_GetNearbyDrivers_drivers {
  __typename: "User";
  id: number;
  lastLat: number | null;
  lastLng: number | null;
}

export interface getDrivers_GetNearbyDrivers {
  __typename: "GetNearbyDriversResponse";
  ok: boolean;
  error: string | null;
  drivers: (getDrivers_GetNearbyDrivers_drivers | null)[] | null;
}

export interface getDrivers {
  GetNearbyDrivers: getDrivers_GetNearbyDrivers;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: requestRide
// ====================================================

export interface requestRide_RequestRide_ride {
  __typename: "Ride";
  id: number;
}

export interface requestRide_RequestRide {
  __typename: "RequestRideResponse";
  ok: boolean;
  error: string | null;
  ride: requestRide_RequestRide_ride | null;
}

export interface requestRide {
  RequestRide: requestRide_RequestRide;
}

export interface requestRideVariables {
  pickUpAddress: string;
  pickUpLat: number;
  pickUpLng: number;
  dropOffAddress: string;
  dropOffLat: number;
  dropOffLng: number;
  price: number;
  distance: string;
  duration: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNearByRides
// ====================================================

export interface getNearByRides_GetNearByRide_ride_passenger {
  __typename: "User";
  fullName: string;
  profilePhoto: string | null;
}

export interface getNearByRides_GetNearByRide_ride {
  __typename: "Ride";
  id: number;
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  duration: string;
  passenger: getNearByRides_GetNearByRide_ride_passenger;
}

export interface getNearByRides_GetNearByRide {
  __typename: "GetNearByRideResponse";
  ok: boolean;
  error: string | null;
  ride: getNearByRides_GetNearByRide_ride | null;
}

export interface getNearByRides {
  GetNearByRide: getNearByRides_GetNearByRide;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: acceptRide
// ====================================================

export interface acceptRide_UpdateRideStatus {
  __typename: "UpdateRideStatusResponse";
  ok: boolean;
  error: string | null;
}

export interface acceptRide {
  UpdateRideStatus: acceptRide_UpdateRideStatus;
}

export interface acceptRideVariables {
  rideId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: nearByRides
// ====================================================

export interface nearByRides_NearByRideSubscription_passenger {
  __typename: "User";
  fullName: string;
  profilePhoto: string | null;
}

export interface nearByRides_NearByRideSubscription {
  __typename: "Ride";
  id: number;
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  duration: string;
  passenger: nearByRides_NearByRideSubscription_passenger;
}

export interface nearByRides {
  NearByRideSubscription: nearByRides_NearByRideSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: startPhoneVerification
// ====================================================

export interface startPhoneVerification_StartPhoneVerification {
  __typename: "StartPhoneVerificationResponse";
  ok: boolean;
  error: string | null;
}

export interface startPhoneVerification {
  StartPhoneVerification: startPhoneVerification_StartPhoneVerification;
}

export interface startPhoneVerificationVariables {
  phoneNumber: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRide
// ====================================================

export interface getRide_GetRide_ride_driver {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string | null;
}

export interface getRide_GetRide_ride_passenger {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string | null;
}

export interface getRide_GetRide_ride {
  __typename: "Ride";
  status: string;
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  duration: string;
  driver: getRide_GetRide_ride_driver | null;
  passenger: getRide_GetRide_ride_passenger;
  chatId: number | null;
}

export interface getRide_GetRide {
  __typename: "GetRideResponse";
  ok: boolean;
  error: string | null;
  ride: getRide_GetRide_ride | null;
}

export interface getRide {
  GetRide: getRide_GetRide;
}

export interface getRideVariables {
  rideId: number;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: rideUpdates
// ====================================================

export interface rideUpdates_RideStatusSubscription_driver {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string | null;
}

export interface rideUpdates_RideStatusSubscription_passenger {
  __typename: "User";
  id: number;
  fullName: string;
  profilePhoto: string | null;
}

export interface rideUpdates_RideStatusSubscription {
  __typename: "Ride";
  status: string;
  pickUpAddress: string;
  dropOffAddress: string;
  price: number;
  distance: string;
  duration: string;
  driver: rideUpdates_RideStatusSubscription_driver | null;
  passenger: rideUpdates_RideStatusSubscription_passenger;
  chatId: number | null;
}

export interface rideUpdates {
  RideStatusSubscription: rideUpdates_RideStatusSubscription | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateRide
// ====================================================

export interface updateRide_UpdateRideStatus {
  __typename: "UpdateRideStatusResponse";
  ok: boolean;
  error: string | null;
}

export interface updateRide {
  UpdateRideStatus: updateRide_UpdateRideStatus;
}

export interface updateRideVariables {
  rideId: number;
  status: StatusOption;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: facebookConnect
// ====================================================

export interface facebookConnect_FacebookConnect {
  __typename: "FacebookConnectResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface facebookConnect {
  FacebookConnect: facebookConnect_FacebookConnect;
}

export interface facebookConnectVariables {
  firstName: string;
  lastName: string;
  email?: string | null;
  fbId: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verifyPhone
// ====================================================

export interface verifyPhone_CompletePhoneVerification {
  __typename: "CompletePhoneVerificationResponse";
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface verifyPhone {
  CompletePhoneVerification: verifyPhone_CompletePhoneVerification | null;
}

export interface verifyPhoneVariables {
  key: string;
  phoneNumber: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userProfile
// ====================================================

export interface userProfile_GetMyProfile_user {
  __typename: "User";
  id: number;
  firstName: string;
  lastName: string;
  email: string | null;
  profilePhoto: string | null;
  fullName: string;
  isDriving: boolean;
}

export interface userProfile_GetMyProfile {
  __typename: "GetMyProfileResponse";
  ok: boolean;
  error: string | null;
  user: userProfile_GetMyProfile_user | null;
}

export interface userProfile {
  GetMyProfile: userProfile_GetMyProfile;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myPlaces
// ====================================================

export interface myPlaces_GetMyPlaces_places {
  __typename: "Place";
  id: number;
  name: string;
  address: string;
  isFav: boolean;
}

export interface myPlaces_GetMyPlaces {
  __typename: "GetMyPlacesResponse";
  ok: boolean;
  error: string | null;
  places: (myPlaces_GetMyPlaces_places | null)[] | null;
}

export interface myPlaces {
  GetMyPlaces: myPlaces_GetMyPlaces;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum StatusOption {
  ACCEPTED = "ACCEPTED",
  CANCELED = "CANCELED",
  FINISHED = "FINISHED",
  ONROUTE = "ONROUTE",
  REQUESTING = "REQUESTING",
}

//==============================================================
// END Enums and Input Objects
//==============================================================
