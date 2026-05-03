
const students = [
  { name: 'John', group: 'A' },
  { name: 'Anna', group: 'B' },
  { name: 'Max', group: 'A' }
];

function groupByGroup(students){
    let groupMap=new Map();
    for (const student of students) {
        if(!groupMap.has(student.group)){
            groupMap.set(student.group,[]);
        }    
        groupMap.get(student.group).push(student.name);
    }
    return groupMap;
}


console.log(groupByGroup(students));//Map(2) { 'A' => [ 'John', 'Max' ], 'B' => [ 'Anna' ] }