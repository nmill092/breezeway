import day1 from 'assets/images/yourday-1.jpg'
import day2 from 'assets/images/yourday-2.jpg'
import day3 from 'assets/images/yourday-3.jpg'
import day4 from 'assets/images/yourday-4.jpg'
import day5 from 'assets/images/yourday-5.jpg'

interface YourDaySection {
  hours: number, 
  minutes: number,
  displayTime: string, 
  title: string, 
  text: string, 
  image: ImageMetadata,
  imageAlt: string,
  rotation: number 
}

const sections: YourDaySection[] = [
  {
    hours: 9, 
    minutes: 30, 
    displayTime: '9:30 am', 
    title: 'Check in',
    text: 'Check in. Find your favorite seat and grab your first cup of coffee.', 
    image: day1,
    imageAlt: 'Much ado about nothing',
    rotation: .2
  }, 
  {
    hours: 11, 
    minutes: 30, 
    displayTime: '11:30 am', 
    title: 'Snack break',
    text: 'Head to the kitchen and take a well-deserved snack break after a couple of hours of focused work.', 
    image: day2,
    imageAlt: 'Much ado about nothing',
    rotation: -.2 
  }, 
  {
    hours: 12, 
    minutes: 30, 
    displayTime: '12:45 pm', 
    title: 'Lunch',
    text: 'Lunch on the roof deck. Enjoy our Center City views and catch up with some neighbors.', 
    image: day3,
    imageAlt: 'Much ado about nothing',
    rotation: 0.4
  }, 
  {
    hours: 3, 
    minutes: 0, 
    displayTime: '3:00 pm', 
    title: 'Game time',
    text: 'Take a break for a quick game of chess with the regulars.', 
    image: day4,
    imageAlt: 'Much ado about nothing',
    rotation: -1.2
  }, 
  {
    hours: 4, 
    minutes: 0, 
    displayTime: '4:00 pm', 
    title: 'Check out',
    text: 'Check out at the front desk and head home for the evening.', 
    image: day5,
    imageAlt: 'Much ado about nothing',
    rotation: 1.1
  }, 
]

export { sections }