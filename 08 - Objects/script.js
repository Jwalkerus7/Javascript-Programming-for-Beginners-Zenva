let player = {
    age: 46, 
    name: 'Jason',
    isActive: true,
    outfit: {
        color: 'forest green',
        size: '5xl',
        cost: '150',
        isNew: true
    }
};
console.log(player);
console.log(player.name);
console.log(player['name']);

player.isActive = false;
console.log(player);

player.health = 100;
console.log(player);

delete player.health; //// Becareful using delete, could cause errors
console.log(player);

console.log(player.outfit.cost);

player.outfit.size = "4xl";
console.log(player.outfit.size);