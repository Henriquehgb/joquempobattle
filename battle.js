
    var timeTravel = 20000;

    function JoquempoBattle() {
        var self = this;

        self.update = function (pastTime) {
            self.updateSoldiersPosition(pastTime);

        };

        self.kingdom1 = new Kingdom('green', 'down');

        self.kingdom2 = new Kingdom('blue', 'up');

        self.kingdoms = [self.kingdom1,self.kingdom2];

        self.updateSoldiersPosition = function (pastTime) {
            for (var i = 0; i < self.kingdom1.soldiers.length; i++) {
                var s = self.kingdom1.soldiers[i];
                s.timeToEnemyKingdom -= pastTime;
            }
            for (var i = 0; i < self.kingdom2.soldiers.length; i++) {
                var s = self.kingdom2.soldiers[i];
                s.timeToEnemyKingdom -= pastTime;
            }
        };

        self.sendSoldier = function(kingdom,type){
            var soldier = {
                type: type,
                timeToEnemyKingdom: timeTravel
            };
            self.kingdoms[kingdom].soldiers.push(soldier);
        }

        self.sendRock = function(kingdom){
            self.sendSoldier(kingdom,'rock');
        }
        self.sendPaper = function(kingdom){
            self.sendSoldier(kingdom,'paper');
        }
        self.sendScissor = function(kingdom){
            self.sendSoldier(kingdom,'scissor');
        }

    }

    function Kingdom(color, direction) {
        var self = this;
        self.color = color;
        self.direction = direction;
        self.soldiers = [
            // { type: 'scissor', timeToEnemyKingdom: 20000 },
            // { type: 'rock', timeToEnemyKingdom: 20000 },
            // { type: 'paper', timeToEnemyKingdom: 20000 }
        ];
        self.castles = [
            { type: 'scissor', conquered: false }
            , { type: 'scissor', conquered: false }
            , { type: 'paper', conquered: false }
            , { type: 'paper', conquered: false }
            , { type: 'rock', conquered: false }
            , { type: 'rock', conquered: false }
        ];
        self.castlesWonCount = 0;
        self.power = 0;
    }