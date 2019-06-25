{
    init: function(elevators, floors) {

        var qFloors = floors.length;

        elevators.forEach(elevator => {

            elevator.on("idle", function() { 
                for (i = 0; i < qFloors; i++) {
                    elevator.goToFloor(i);
                }
            });

            if(elevator.getPressedFloors().length > 0) {
                var pressedFloors = elevator.getPressedFloors().sort();
                pressedFloors.forEach(floor => {
                    elevator.goToFloor(floor)
                })
                
            }

        });

       
    },
    
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}