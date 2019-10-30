// Dummy Data to test on Front-End with

const construction = {name: 'construction',  have: true, experience: 5}
const restoration = {name: 'restoration',  have: false, experience: 10}
const painting = {name: 'painting',  have: false, experience: 2}

const generalLabor = {name: 'General Labor',  equipment: 'Hammer', construction, restoration, painting}
const Hospitality = {name: 'Hospitality',  equipment: 'Blanket'}
const Warehouse = {name: 'Warehouse',  equipment: 'Forklift'}
const Office = {name: 'Office',  equipment: 'Pens'}
const iRelaunch = {name: 'iRelaunch',  equipment: 'Paper'}

export const skillsData = [generalLabor, Hospitality, Warehouse, Office, iRelaunch]
