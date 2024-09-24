let details : {
	name: string;
	roll: number
}
details = {name: 'robi', roll: 543 }
console.log(details)
for(let key in details){
	console.log(details[key])
}