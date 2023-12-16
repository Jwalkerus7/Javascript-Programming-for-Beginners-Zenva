let fuel = 1000;
let distance = 0;

while(fuel > 0) {
    distance++;
    if(distance >= 100 && distance <= 200){ //Can remove the = on <= and it will be 600 without and 601 with
        continue;
    }

    fuel--;

    if(distance == 500) {
        break;
    }
}
console.log(distance, fuel);