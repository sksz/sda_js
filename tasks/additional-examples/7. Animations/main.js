$("#button").on("click", function() {
  $(this).animate(
    {
      left: "+=50"
    },
    1000,
    function() {
      alert('animation finished');
    }
  );
});
