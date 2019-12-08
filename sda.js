var init;

init = function() {
    var user, book, lend;

    user = [
        {
            id: 1,
            login: 'jan.kowalski',
            password: '******',
            email: 'jan.kowalski@nijaka.pl',
            avatar: 'jan.kowalski.jpg',
            roles: [
                {
                    accountRole: 'administrator'
                }, {
                    accountRole: 'user'
                }
            ],
            personalData: {
                firstName: 'Jan',
                lastName: 'Nijaki',
                birthDate: '01.01.-20',
                gender: 'M',
                phoneNumber: '+48914112233'
            }
        }
    ];

    book = [
        {
            isdn: '123123-qdsdsad-123123',
            title: 'ANSI C',
            authors: 'Kerrigan, Ritche',
            publishYear: 1981,
            publisher: 'Ja :)'
        }
    ];

    lend = [
        {
            lendDate: '07-12-2019',
            lendTo: '07-01-2020',
            book: '123123-qdsdsad-123123',
            user: 1,
            deleted: false
        }
    ];

    
}
