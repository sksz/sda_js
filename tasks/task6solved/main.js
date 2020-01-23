$
  .get('https://randomuser.me/api/?results=4', function(data) { // zaletą korzystania z bilbioteki jQuery jest to, ze w zmiennej 'data' otrzymujemy juz sparsowanego JSON-a na zwykły obiekt JavaScript, nie musimy robić tego sami co zaoszczędza nam pisania dodatkowego kodu
    const wrapper = document.createElement("div"); // tworzymy pusty wrapper

    data.results.forEach(function(user) { // przechodzimy w pętli po tablicy 'results'
      $(`
        <div>
          <h3>${user.name.first} ${user.name.last}</h3>
          <img src="${user.picture.thumbnail}" />
        </div>
      `).appendTo(wrapper); // dodajemy w pętli nowe elementy do naszego wrappera
    })

    $(document.body).append(wrapper); // PO skończonym przejściu przez pętle, dodajemy naszego wrappera do elementu body, dopiero po tej operacji nasze wcześniej utworzone elementy będą widoczne na stronie
  })
  .fail(function() { // zgodnie z dokumentacją jquery chainujemy metodę fail() dodając zaraz za wywołaniem metody get()
    $('.error').text("Error occured, please try again later.") // do elementu o klasie .error wstawiamy informację o zaistaniałym błędzie
  });

// polecam któtką lekturę wyjaśniającą czym jest JSON i jak jest zbudowany https://developers.squarespace.com/what-is-json
