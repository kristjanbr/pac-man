(function () {
        canvas = document.getElementById('canvasMaze');
        ctx = canvasMaze.getContext('2d');
        ctx.scale(2,2);
    init(); //nice init init?

    function init() {
        resizeCanvas();
    }

    function redraw() {

        ctx.moveTo(2, 2);
        ctx.lineTo(130, 2);

        ctx.moveTo(146, 2);
        ctx.lineTo(290, 2);

        ctx.moveTo(34, 18);
        ctx.lineTo(98, 18);

        ctx.moveTo(178, 18);
        ctx.lineTo(226, 18);

        ctx.moveTo(2, 34);
        ctx.lineTo(34, 34);

        ctx.moveTo(66, 34);
        ctx.lineTo(114, 34);

        ctx.moveTo(178, 34);
        ctx.lineTo(194, 34);

        ctx.moveTo(226, 34);
        ctx.lineTo(242, 34);

        ctx.moveTo(258, 34);
        ctx.lineTo(274, 34);

        ctx.moveTo(50, 50);
        ctx.lineTo(66, 50);

        ctx.moveTo(114, 50);
        ctx.lineTo(146, 50);

        ctx.moveTo(210, 50);
        ctx.lineTo(226, 50);

        ctx.moveTo(242, 50);
        ctx.lineTo(258, 50);

        ctx.moveTo(274, 50);
        ctx.lineTo(290, 50);

        ctx.moveTo(34, 66);
        ctx.lineTo(50, 66);

        ctx.moveTo(82, 66);
        ctx.lineTo(114, 66);

        ctx.moveTo(146, 66);
        ctx.lineTo(162, 66);

        ctx.moveTo(258, 66);
        ctx.lineTo(274, 66);

        ctx.moveTo(2, 82);
        ctx.lineTo(18, 82);

        ctx.moveTo(34, 82);
        ctx.lineTo(98, 82);

        ctx.moveTo(130, 82);
        ctx.lineTo(146, 82);

        ctx.moveTo(194, 82);
        ctx.lineTo(258, 82);

        ctx.moveTo(18, 98);
        ctx.lineTo(66, 98);

        ctx.moveTo(98, 98);
        ctx.lineTo(114, 98);

        ctx.moveTo(130, 98);
        ctx.lineTo(194, 98);

        ctx.moveTo(210, 98);
        ctx.lineTo(226, 98);

        ctx.moveTo(258, 98);
        ctx.lineTo(290, 98);

        ctx.moveTo(2, 114);
        ctx.lineTo(34, 114);

        ctx.moveTo(114, 114);
        ctx.lineTo(242, 114);

        ctx.moveTo(2, 130);
        ctx.lineTo(18, 130);

        ctx.moveTo(34, 130);
        ctx.lineTo(82, 130);

        ctx.moveTo(114, 130);
        ctx.lineTo(146, 130);

        ctx.moveTo(178, 130);
        ctx.lineTo(210, 130);

        ctx.moveTo(226, 130);
        ctx.lineTo(274, 130);

        ctx.moveTo(18, 146);
        ctx.lineTo(50, 146);

        ctx.moveTo(82, 146);
        ctx.lineTo(130, 146);

        ctx.moveTo(146, 146);
        ctx.lineTo(162, 146);

        ctx.moveTo(210, 146);
        ctx.lineTo(226, 146);

        ctx.moveTo(274, 146);
        ctx.lineTo(290, 146);

        ctx.moveTo(2, 162);
        ctx.lineTo(82, 162);

        ctx.moveTo(114, 162);
        ctx.lineTo(130, 162);

        ctx.moveTo(162, 162);
        ctx.lineTo(242, 162);

        ctx.moveTo(258, 162);
        ctx.lineTo(274, 162);

        ctx.moveTo(18, 178);
        ctx.lineTo(34, 178);

        ctx.moveTo(66, 178);
        ctx.lineTo(146, 178);

        ctx.moveTo(178, 178);
        ctx.lineTo(194, 178);

        ctx.moveTo(242, 178);
        ctx.lineTo(258, 178);

        ctx.moveTo(34, 194);
        ctx.lineTo(50, 194);

        ctx.moveTo(82, 194);
        ctx.lineTo(114, 194);

        ctx.moveTo(178, 194);
        ctx.lineTo(194, 194);

        ctx.moveTo(210, 194);
        ctx.lineTo(242, 194);

        ctx.moveTo(18, 210);
        ctx.lineTo(82, 210);

        ctx.moveTo(114, 210);
        ctx.lineTo(146, 210);

        ctx.moveTo(162, 210);
        ctx.lineTo(178, 210);

        ctx.moveTo(194, 210);
        ctx.lineTo(226, 210);

        ctx.moveTo(242, 210);
        ctx.lineTo(258, 210);

        ctx.moveTo(2, 226);
        ctx.lineTo(34, 226);

        ctx.moveTo(66, 226);
        ctx.lineTo(114, 226);

        ctx.moveTo(130, 226);
        ctx.lineTo(194, 226);

        ctx.moveTo(226, 226);
        ctx.lineTo(242, 226);

        ctx.moveTo(258, 226);
        ctx.lineTo(274, 226);

        ctx.moveTo(34, 242);
        ctx.lineTo(50, 242);

        ctx.moveTo(82, 242);
        ctx.lineTo(114, 242);

        ctx.moveTo(146, 242);
        ctx.lineTo(226, 242);

        ctx.moveTo(274, 242);
        ctx.lineTo(290, 242);

        ctx.moveTo(34, 258);
        ctx.lineTo(66, 258);

        ctx.moveTo(82, 258);
        ctx.lineTo(98, 258);

        ctx.moveTo(130, 258);
        ctx.lineTo(210, 258);

        ctx.moveTo(258, 258);
        ctx.lineTo(274, 258);

        ctx.moveTo(18, 274);
        ctx.lineTo(34, 274);

        ctx.moveTo(98, 274);
        ctx.lineTo(130, 274);

        ctx.moveTo(146, 274);
        ctx.lineTo(178, 274);

        ctx.moveTo(194, 274);
        ctx.lineTo(226, 274);

        ctx.moveTo(242, 274);
        ctx.lineTo(258, 274);

        ctx.moveTo(274, 274);
        ctx.lineTo(290, 274);

        ctx.moveTo(2, 290);
        ctx.lineTo(146, 290);

        ctx.moveTo(162, 290);
        ctx.lineTo(290, 290);

        ctx.moveTo(2, 2);
        ctx.lineTo(2, 290);

        ctx.moveTo(18, 2);
        ctx.lineTo(18, 18);

        ctx.moveTo(18, 50);
        ctx.lineTo(18, 82);

        ctx.moveTo(18, 178);
        ctx.lineTo(18, 210);

        ctx.moveTo(18, 226);
        ctx.lineTo(18, 274);

        ctx.moveTo(34, 34);
        ctx.lineTo(34, 66);

        ctx.moveTo(34, 82);
        ctx.lineTo(34, 98);

        ctx.moveTo(34, 130);
        ctx.lineTo(34, 146);

        ctx.moveTo(34, 210);
        ctx.lineTo(34, 226);

        ctx.moveTo(34, 242);
        ctx.lineTo(34, 258);

        ctx.moveTo(50, 18);
        ctx.lineTo(50, 34);

        ctx.moveTo(50, 114);
        ctx.lineTo(50, 130);

        ctx.moveTo(50, 162);
        ctx.lineTo(50, 194);

        ctx.moveTo(50, 226);
        ctx.lineTo(50, 242);

        ctx.moveTo(50, 258);
        ctx.lineTo(50, 274);

        ctx.moveTo(66, 34);
        ctx.lineTo(66, 82);

        ctx.moveTo(66, 98);
        ctx.lineTo(66, 114);

        ctx.moveTo(66, 130);
        ctx.lineTo(66, 162);

        ctx.moveTo(66, 178);
        ctx.lineTo(66, 194);

        ctx.moveTo(66, 226);
        ctx.lineTo(66, 258);

        ctx.moveTo(66, 274);
        ctx.lineTo(66, 290);

        ctx.moveTo(82, 34);
        ctx.lineTo(82, 50);

        ctx.moveTo(82, 82);
        ctx.lineTo(82, 130);

        ctx.moveTo(82, 194);
        ctx.lineTo(82, 210);

        ctx.moveTo(82, 242);
        ctx.lineTo(82, 290);

        ctx.moveTo(98, 2);
        ctx.lineTo(98, 18);

        ctx.moveTo(98, 50);
        ctx.lineTo(98, 66);

        ctx.moveTo(98, 98);
        ctx.lineTo(98, 146);

        ctx.moveTo(98, 162);
        ctx.lineTo(98, 178);

        ctx.moveTo(98, 194);
        ctx.lineTo(98, 226);

        ctx.moveTo(114, 18);
        ctx.lineTo(114, 50);

        ctx.moveTo(114, 66);
        ctx.lineTo(114, 114);

        ctx.moveTo(114, 178);
        ctx.lineTo(114, 194);

        ctx.moveTo(114, 242);
        ctx.lineTo(114, 274);

        ctx.moveTo(130, 2);
        ctx.lineTo(130, 34);

        ctx.moveTo(130, 50);
        ctx.lineTo(130, 82);

        ctx.moveTo(130, 146);
        ctx.lineTo(130, 162);

        ctx.moveTo(130, 194);
        ctx.lineTo(130, 210);

        ctx.moveTo(130, 226);
        ctx.lineTo(130, 258);

        ctx.moveTo(146, 18);
        ctx.lineTo(146, 50);

        ctx.moveTo(146, 130);
        ctx.lineTo(146, 194);

        ctx.moveTo(146, 210);
        ctx.lineTo(146, 226);

        ctx.moveTo(146, 274);
        ctx.lineTo(146, 290);

        ctx.moveTo(162, 2);
        ctx.lineTo(162, 98);

        ctx.moveTo(162, 114);
        ctx.lineTo(162, 146);

        ctx.moveTo(162, 162);
        ctx.lineTo(162, 210);

        ctx.moveTo(178, 18);
        ctx.lineTo(178, 98);

        ctx.moveTo(178, 130);
        ctx.lineTo(178, 146);

        ctx.moveTo(178, 178);
        ctx.lineTo(178, 194);

        ctx.moveTo(178, 258);
        ctx.lineTo(178, 274);

        ctx.moveTo(194, 50);
        ctx.lineTo(194, 82);

        ctx.moveTo(194, 146);
        ctx.lineTo(194, 162);

        ctx.moveTo(194, 194);
        ctx.lineTo(194, 210);

        ctx.moveTo(194, 274);
        ctx.lineTo(194, 290);

        ctx.moveTo(210, 18);
        ctx.lineTo(210, 66);

        ctx.moveTo(210, 82);
        ctx.lineTo(210, 98);

        ctx.moveTo(210, 130);
        ctx.lineTo(210, 146);

        ctx.moveTo(210, 162);
        ctx.lineTo(210, 194);

        ctx.moveTo(210, 210);
        ctx.lineTo(210, 242);

        ctx.moveTo(226, 50);
        ctx.lineTo(226, 66);

        ctx.moveTo(226, 114);
        ctx.lineTo(226, 146);

        ctx.moveTo(226, 162);
        ctx.lineTo(226, 178);

        ctx.moveTo(226, 210);
        ctx.lineTo(226, 226);

        ctx.moveTo(226, 242);
        ctx.lineTo(226, 274);

        ctx.moveTo(242, 18);
        ctx.lineTo(242, 114);

        ctx.moveTo(242, 146);
        ctx.lineTo(242, 162);

        ctx.moveTo(242, 194);
        ctx.lineTo(242, 210);

        ctx.moveTo(242, 226);
        ctx.lineTo(242, 258);

        ctx.moveTo(242, 274);
        ctx.lineTo(242, 290);

        ctx.moveTo(258, 2);
        ctx.lineTo(258, 18);

        ctx.moveTo(258, 34);
        ctx.lineTo(258, 50);
        ctx.moveTo(258, 98);
        ctx.lineTo(258, 114);
        ctx.moveTo(258, 130);
        ctx.lineTo(258, 194);
        ctx.moveTo(258, 210);
        ctx.lineTo(258, 274);
        ctx.moveTo(274, 18);
        ctx.lineTo(274, 34);
        ctx.moveTo(274, 50);
        ctx.lineTo(274, 82);
        ctx.moveTo(274, 114);
        ctx.lineTo(274, 130);
        ctx.moveTo(274, 178);
        ctx.lineTo(274, 226);
        ctx.moveTo(290, 2);
        ctx.lineTo(290, 290);

        ctx.strokeStyle = "#0000FF";
        ctx.fill();
        ctx.stroke();

    }

    function resizeCanvas() {
        redraw();
        
    }
})();