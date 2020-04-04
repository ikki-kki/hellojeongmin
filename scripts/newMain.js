
$(document).ready(function () {
    $(function () {

        // Rotate Skill Badges
        var $badges = $(".skill_item img");

        function rotateBadge(passedBadge, speed) {
            var rotateSpeed = speed / 180,
                current = 0;

            function badgeRotation(passedBadge) {
                current = (current == 90) ? 271 : current + 1;

                passedBadge.css({
                    "-webkit-transform": "rotate3d(0,1,0," + current + "deg)",
                    "-moz-transform": "rotate3d(0,1,0," + current + "deg)",
                    "transform": "rotate3d(0,1,0," + current + "deg)"
                });

                if (current == 360) {
                    clearInterval(rotateInterval);
                    passedBadge.removeAttr('style').removeClass('spinning');
                }
            }

            var rotateInterval = setInterval(function () { badgeRotation(passedBadge) }, rotateSpeed);
        }

        $badges.mouseenter(function () {
            if ($(this).hasClass('spinning')) {
                return false;
            } else {
                rotateBadge($(this), 500);
                $(this).addClass('spinning');
            }
        });

    });
});