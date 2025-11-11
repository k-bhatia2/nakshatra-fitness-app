import { Role, User, UserDashboardData, OwnerDashboardData, AdminDashboardData, DashboardData } from '../types';

// MOCK USER DATA
const MOCK_USERS: Record<Role, User> = {
  [Role.USER]: { id: 'user-1', firstName: 'Ananya', role: Role.USER, gyms: ['gym-1'] },
  [Role.OWNER]: { id: 'owner-1', firstName: 'Rahul', role: Role.OWNER, gyms: ['gym-1', 'gym-2'] },
  [Role.ADMIN]: { id: 'admin-1', firstName: 'Hannah', role: Role.ADMIN, gyms: [] },
};

// MOCK DASHBOARD DATA
const USER_DASHBOARD_DATA: UserDashboardData = {
  role: Role.USER,
  greetingName: "Ananya",
  kpis: [
    {id:"membership",title:"Membership","value":"15 days left",icon:"CreditCard"},
    {id:"workoutsWeek",title:"Workouts This Week","value":3,"icon":"Dumbbell"}
  ],
  charts: [
    {id:"streak",title:"Check-in Streak","type":"line",dataset:[{"d":"Mon",v:1},{"d":"Tue",v:1},{"d":"Wed",v:0},{"d":"Thu",v:1},{"d":"Fri",v:1},{"d":"Sat",v:1},{"d":"Sun",v:0}], xKey:"d",series:[{dataKey:"v",name:"Check-ins", color: "#8D3180"}]}
  ],
  todayWorkoutPreview: {title:"Upper Body","items":["Bench Press","Lat Pulldown","Shoulder Press"]},
  sponsored: [
    {id:"ad1",label:"EZEE HOOP",image:"https://picsum.photos/seed/hoop/400/300",cta:"Shop Now",href:"#",provider:"hulahoopsindia",trackingId:"trk-001"},
    {id:"ad2",label:"Peanut Butter",image:"https://picsum.photos/seed/pb/400/300",cta:"Buy",href:"#",provider:"brandX",trackingId:"trk-002"}
  ]
};

const OWNER_DASHBOARD_DATA: OwnerDashboardData = {
  role: Role.OWNER,
  greetingName: "Rahul",
  kpis: [
    {id:"gymsManaged",title:"Gyms Managed","value":2,icon:"Building2"},
    {id:"activeMembers",title:"Active Members","value":320,delta:4.2,icon:"Users"},
    {id:"inGymNow",title:"In Gym Now","value":18,icon:"Activity"}
  ],
  charts: [
    {id:"attendanceTrend",title:"Attendance (30d)","type":"area",dataset:[...Array(30)].map((_, i) => ({ day: `D${i+1}`, v: 40 + Math.sin(i / 3) * 15 + Math.random() * 10 })), xKey:"day",series:[{dataKey:"v",name:"Check-ins", color: "#8D3180"}]},
  ],
  renewals: [{memberId:"M1",name:"Isha","daysLeft":3}, {memberId:"M2",name:"Ravi","daysLeft":1}, {memberId:"M3",name:"Priya","daysLeft":7}]
};

const ADMIN_DASHBOARD_DATA: AdminDashboardData = {
  role: Role.ADMIN,
  greetingName: "Hannah",
  kpis: [
    {id:"totalGyms",title:"Total Gyms","value":51,icon:"Star"},
    {id:"totalUsers",title:"Total Users","value":3200,delta:1.5,icon:"UserRound"},
    {id:"activeToday",title:"Active Today","value":235,icon:"Timer"}
  ],
  charts: [
    {id:"growth",title:"Platform Growth (MAU)","type":"line",dataset:[{m:"Jan",v:800},{m:"Feb",v:920},{m:"Mar",v:1100},{m:"Apr",v:1350},{m:"May",v:1800},{m:"Jun",v:2100}],xKey:"m",series:[{dataKey:"v",name:"MAU", color: "#8D3180"}]},
    {id:"topGyms",title:"Top Gyms by Activity","type":"bar",dataset:[{gym:"FlexHub",v:120},{gym:"IronWorks",v:96}, {gym:"CoreFit",v:91}, {gym:"PumpHouse",v:78}],xKey:"gym",series:[{dataKey:"v",name:"Check-ins", color: "#8D3180"}]}
  ],
  systemHealth: {status:"OK",latencyMs:42,apiUptimePct:99.95}
};

const MOCK_DASHBOARD_DATA: Record<Role, DashboardData> = {
  [Role.USER]: USER_DASHBOARD_DATA,
  [Role.OWNER]: OWNER_DASHBOARD_DATA,
  [Role.ADMIN]: ADMIN_DASHBOARD_DATA,
};

// Simulate API delay
const apiDelay = <T,>(data: T): Promise<T> => 
  new Promise(resolve => setTimeout(() => resolve(data), 500));


// API Functions
export const getMe = (role: Role): User => {
  return MOCK_USERS[role];
};

export const getDashboardData = (role: Role): Promise<DashboardData> => {
  return apiDelay(MOCK_DASHBOARD_DATA[role]);
};