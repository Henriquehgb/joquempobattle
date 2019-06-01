
    function drawBattle(canvas, canvasContext, battle){

        drawKingdom(c, cc, battle.kingdom1, 'down');

        drawKingdom(c, cc, battle.kingdom2, 'up');

        drawSoldiers(c, cc, battle);

    }

    function drawKingdom(canvas, canvasContext, kingdom, direction) {
        //canvasContext.fillStyle = kingdom.color;
        canvasContext.strokeStyle = kingdom.color;
        if (direction == 'down')
            canvasContext.strokeRect(10, 0, canvas.width - 20, 60);
        else
            canvasContext.strokeRect(10, canvas.height - 60, canvas.width - 20, 60);

        drawCastles(canvas, canvasContext, kingdom, direction);
    }
    
    function drawCastles(canvas, canvasContext, kingdom, direction){
        var x = 0;
        for (var i = 0; i < battle.kingdom1.castles.length; i++) {
            var c = battle.kingdom1.castles[i];
            x += 70;
            drawCastle(x, 30, canvas, canvasContext,battle.kingdom1.color,c.type);
        }
        x = 0;
        for (var i = 0; i < battle.kingdom2.castles.length; i++) {
            var c = battle.kingdom2.castles[i];
            x += 70;
            drawCastle(x, canvas.height - 30, canvas, canvasContext, battle.kingdom2.color, c.type);
        }
    }

    function drawCastle(x, y, canvas, canvasContext, color, type) {
        canvasContext.fillStyle = color;

        if (type == 'scissor') {
            canvasContext.fillRect(x + 30, y - 20, 10, 20);
            canvasContext.fillRect(x + 20, y, 10, 10);
            canvasContext.fillRect(x + 10, y - 20, 10, 20);
            canvasContext.fillRect(x, y + 20, 50, 10);
            canvasContext.fillRect(x, y, 10, 20);
            canvasContext.fillRect(x + 30, y + 10, 10, 10);
            canvasContext.fillRect(x + 10, y + 10, 10, 10);
            canvasContext.fillRect(x + 40, y, 10, 20);
        }
        else if (type == 'rock') {
            canvasContext.beginPath();
            canvasContext.arc(x + 42, y - 6, 8, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.beginPath();
            canvasContext.arc(x + 25, y - 6, 8, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.beginPath();
            canvasContext.arc(x + 8, y - 6, 8, 0, 2 * Math.PI);
            canvasContext.fill();
            canvasContext.fillRect(x, y, 50, 30);
        }
        if (type == 'paper') {
            canvasContext.strokeStyle = color;
            canvasContext.strokeRect(x, y - 10, 10, 10);
            canvasContext.strokeRect(x + 40, y - 10, 10, 10);
            canvasContext.fillRect(x-1, y + 20, 52, 10);
            canvasContext.strokeRect(x, y, 50, 20);
        }

    }

    function drawSoldiers(canvas, canvasContext, battle) {
        var x = 0;
        for (var i = 0; i < battle.kingdom1.soldiers.length; i++) {
            var s = battle.kingdom1.soldiers[i];
            x += 70;
            var y = canvas.height - (canvas.height / 20000) * s.timeToEnemyKingdom;
            drawSoldier(x, y, canvas, canvasContext, s.type, battle.kingdom1.color, battle.kingdom1.direction);
        }
        x = 0;
        for (var i = 0; i < battle.kingdom2.soldiers.length; i++) {
            var s = battle.kingdom2.soldiers[i];
            x += 70;
            var y = (canvas.height / 20000) * s.timeToEnemyKingdom;
            drawSoldier(x, y, canvas, canvasContext, s.type, battle.kingdom2.color, battle.kingdom2.direction);
        }
    };

    function drawSoldier(x, y, canvas, canvasContext, type, color, direction) {
        if (type == 'scissor')
            drawScissor(x, y, canvas, canvasContext, color, direction);
        if (type == 'rock')
            drawRock(x, y, canvas, canvasContext, color, direction);
        if (type == 'paper')
            drawPaper(x, y, canvas, canvasContext, color, direction);
    };

    function drawScissor(x, y, canvas, canvasContext, color, direction) {
        canvasContext.fillStyle = color;
        if (direction == 'down') {
            canvasContext.fillRect(x, y - 10, 10, 10);
            canvasContext.fillRect(x + 20, y - 10, 10, 10);
            canvasContext.fillRect(x+10, y, 10, 10);
            canvasContext.fillRect(x, y + 10, 10, 20);
            canvasContext.fillRect(x + 20, y + 10, 10, 20);
        }
        else if (direction == 'up') {
            canvasContext.fillRect(x, y , 10, 20);
            canvasContext.fillRect(x + 20, y , 10, 20);
            canvasContext.fillRect(x+10, y+20, 10, 10);
            canvasContext.fillRect(x , y + 30, 10, 10);
            canvasContext.fillRect(x + 20, y + 30, 10, 10);
        }
    }

    function drawRock(x, y, canvas, canvasContext, color, direction) {
        canvasContext.fillStyle = color;

        canvasContext.beginPath();
        canvasContext.arc(x+15, y + 15, 15, 0, 2 * Math.PI);
        canvasContext.fill();
    }

    function drawPaper(x, y, canvas, canvasContext, color, direction) {
        canvasContext.strokeStyle = color;
        canvasContext.strokeRect(x, y, 20, 30);
    }
