{
    init: function(elevators, floors) {

        var qFloors = floors.length;

        elevators.forEach(elevator => {

            for (i = 0; i < qFloors; i++) {
                    
                elevator.goToFloor(i);
            }

            elevator.on("idle", function() { 
                for (i = 0; i < qFloors; i++) {
                    
                    elevator.goToFloor(Math.random() * (qFloors - 0) + 0);
                }
            });

        });

       
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}