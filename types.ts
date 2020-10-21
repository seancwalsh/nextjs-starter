export type User = {
  _id: string
  name: string
  email: string
  billingId: string
  challenges?: UserChallenge[]
  token: string
  age: number
  gender: string
  address: string
  phoneNumber: number
  isAdmin?: boolean
  profileImageUrl?: string
}

export type UserChallenge = {
  _id: string
  name: string
  currentMiles: number
  remainingMiles: number
  dateStarted: number
  bibNumber: number
  bibImageUrl?: string
  finishCertificateImageUrl?: string
}

export type Waypoints = { lat: number; lng: number }[]

export type Mile = {
  _id: string
  userId: string
  miles: number
  createdAt: string
  updatedAt?: string
}

export type Miles = {
  getMiles: {
    miles: Mile[]
    totalMiles: number
  }
}

export type Challenge = {
  _id: string
  challengeId: string
  name: string
  description?: string
  totalMiles: number
  milestones: number[]
  postcardMilestones: number[]
  imageUrl: string
  pathname: string
  route: { startPointName: string; endPointName: string }
  type: 'miles' | 'elevation'
  startDate?: Date
  endDate?: Date
}

export type Leaderboard = {
  _id: string
  userId: string
  challengeId: string
  name: string
  milesCovered: number
  milesLeft: number
  bibNumber: number
}
