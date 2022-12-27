const company = {
    name: 'OOO AGRO',
    employees: [
        {
            name: 'Sveta',
            getName: function () {
                return this.name;
            }
        },
        {
            name: 'Sasha',
            getName: function () {
                return this.name;
            }
        }
    ],
    ceo: {
        name: 'Vasya',
        getName: function () {
            return this.name;
        }
    },

    getName: function () {
        return this.name;
    }
}
console.log(company.getName());
console.log(company.ceo.getName());
console.log(company.employees.map(employee => employee.getName()));

