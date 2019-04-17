var x = 0;
$(document).on("click", "input[type='submit']", function () {
    x = x + 1;
    alert("Successfully Added to Cart!!\nItems in Cart : " + x);
});


$(window).keypress(function (e) {
    if (e.which === 32) {

        x = 0;
        alert("Cart Is Cleared!\nItems in Cart : " + x);

    }
});
