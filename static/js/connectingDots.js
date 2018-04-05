"use strict";

// based on http://codepen.io/erikterwan/pen/VamXGe by http://codepen.io/erikterwan/
// MIT licensed
(function() {
    var connectingDots = (function(window) {
        return function (documentId, o) {
            o = o || {}
            var canvas = document.getElementById(documentId),
            ctx = canvas.getContext('2d'),
            points = [],
            w, h,
            delay = o.delay || 100,
            amount = o.amount || 100, // relative to screen size
            speed = o.speed || 30,
            size = o.size || 4,
            lineWidth = o.lineWidth || 2,
            distance = o.distance || 500,
            randomSize = o.randomSize || 0.5,
            bgColor = o.bgColor || '#0088CE';

            function setCanvasSize() {
                w = canvas.width = canvas.parentNode.offsetWidth;
                h = canvas.height = canvas.parentNode.offsetHeight;
            }

            function setup() {
                setCanvasSize();

                points = [];
                var screenDelta = Math.sqrt(w + h) / 100;
                var useAmount = amount * screenDelta;

                for (var i = 0; i < useAmount; i++) {
                    var y = (Math.random() * h);
                    var ySpeed = (Math.random() * (speed / 10)) - (speed / 20);

                    var x3rd = (Math.random() * (w/3));

                    var x = (i % 2) == 0 ? x3rd : w - x3rd;
                    var xSpeed = (Math.random() * (speed / 10)) - (speed / 20);

                    points.push(new Point(x, y, xSpeed, ySpeed));
                }

                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, w, h);
            }

            function draw() {
                ctx.globalCompositeOperation = "source-over";

                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, w, h);

                ctx.lineWidth = lineWidth;
                ctx.fillStyle = 'hsl(190,55%,54%)';

                var screenDelta = Math.sqrt(w + h) / 100;
                var useDistance = distance * screenDelta;

                ctx.globalCompositeOperation = "lighter";

                points.each(function (point) {
                    points.each(function (connection) {
                        var distanceX = Math.pow((connection.x - point.x), 2);
                        var distanceY = Math.pow((connection.y - point.y), 2);
                        var distance = Math.sqrt(distanceX + distanceY);

                        if (distance <= useDistance) {
                            var alpha = 1.0 - (distance / useDistance);

                            ctx.strokeStyle = 'hsla(190,65%,10%, ' + alpha + ')';

                            ctx.beginPath();
                            ctx.moveTo(point.x, point.y);
                            ctx.lineTo(connection.x, connection.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    });
                });

                ctx.globalCompositeOperation = "source-over";

                points.each(function (point) {
                    point.draw();
                });

                setTimeout(function () {
                    window.requestAnimationFrame(draw);
                }, delay)
            }

            var Point = function (_x, _y, _xSpeed, _ySpeed) {
                this.x = _x;
                this.y = _y;
                this.xSpeed = _xSpeed;
                this.ySpeed = _ySpeed;

                var _this = this;

                this.draw = function () {
                    var xNoise = ((Math.random() * randomSize) - randomSize / 2);
                    var yNoise = ((Math.random() * randomSize) - randomSize / 2);

                    _this.x += _this.xSpeed + xNoise;
                    _this.y += _this.ySpeed + yNoise;

                    if (_this.x < size || _this.x > (w - size)) {
                        _this.xSpeed = -_this.xSpeed;
                    }

                    if (_this.y < size || _this.y > (h - size)) {
                        _this.ySpeed = -_this.ySpeed;
                    }

                    if (_this.x < 0) {
                        _this.x = 2;
                    }

                    if (_this.x > w) {
                        _this.x = w - 2;
                    }

                    if (_this.y < 0) {
                        _this.y = 2;
                    }

                    if (_this.y > h) {
                        _this.y = h - 2;
                    }

                    ctx.beginPath();
                    ctx.arc(_this.x, _this.y, size, 0, 2 * Math.PI);
                    ctx.fill();
                    ctx.closePath();
                };
            }

            // Faster than .forEach
            Array.prototype.each = function (a) {
                var l = this.length;
                for (var i = 0; i < l; i++)a(this[i], i)
            };

            window.addEventListener('resize', setup, false);

            setTimeout(function() {
                setCanvasSize()
                setup();
                draw();
            }, 100);
        }
    })(window);

    connectingDots(
      "particles",
      {
          // How many ms to wait between frames (determines FPS)
          delay:              100,
          // How many particles
          amount:             70,
          // How fast should the particles move
          speed:              30,
          // Size of particles in px
          size:               4,
          // Connection width in px
          lineWidth:          2,
          // Max distances between particles where a connection should be drawn
          distance:           400,
          // Bluriness
          randomSize:         2.5,
          // Background color
          bgColor:           'rgba(0,120,255,0.7)' //'hsla(190,60%,45%, 0.1)'
      }
    );
})();
