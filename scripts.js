document.addEventListener('DOMContentLoaded', function(){
    var friend = ["Wayne", "Kwinn", "Connie", "Davida", "Sarah"];
    var weapon = ["paper clip", "rubber band", "spoon", "coat", "book", "chair", "frying pan", "picture", "camera", "trash can", "lightbulb", "shoe", "purse", "magazine", "hat", "phone", "TV", "radio", "rose", "daisy"];
    var location = ["copy room", "break room", "library", "grocery store", "car", "train station", "airport", "bathroom", "junkyard", "house"];

    function addClue(num) {
        var clue = document.createElement('h3');
        clue.innerHTML = 'Clue ' + num;
        clue.addEventListener('click', function(){
            clueNumber = num;
            var friend = friends[num % friends.length];
            var location = locations[num % locations.length];
            var weapon = weapons[num % weapons.length];
            var message = 'Clue ' + clueNumber + ': ' + friend + ' did it in the ' + location + ' with a ' + weapon + '.';
            alert(message);
        });
        document.body.appendChild(clue);
    };

    for(var i = 1; i < 101; i++){
        addClue(i);
    };
});