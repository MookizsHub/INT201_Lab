class Person {
    constructor(firstName, lastName, dateOfBirth) {
      this.firstName = firstName
      this.lastName = lastName
      this.dateOfBirth = dateOfBirth
    }
    getFullName() {
      return `${this.lastName}, ${this.firstName}`
    }
    getAge() {
      const milliToday = Date.now() //number of milliseconds of today
      //The getTime() method of Date instances returns the number of milliseconds
      const milliBirthdate = this.dateOfBirth.getTime() //number of milliseconds of this.dateOfBirth
      const diffMilli = milliToday - milliBirthdate
      const dateOfDiffMilli = new Date(diffMilli)
      return dateOfDiffMilli.getFullYear() - 1970 //getFullYear() returns the year for this date
    }
    isEqual(anotherPerson) {
      return (
        this.firstName?.toLowerCase() ===
          anotherPerson?.firstName?.toLowerCase() &&
        this.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
      )
    }
    toString() {
      return `${this.getFullName()}, ${this.getAge()}`
    }
  }
  //new Date(year, monthIndex, day)
  const me = new Person('Umaporn', 'Sup', new Date(1980, 4, 1))
  console.log(me.getAge())