function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener('click',()=>
    hours.value = days.value * 24)
    document.getElementById('daysBtn').addEventListener('click',()=>
    minutes.value = days.value * 60 * 24)
    document.getElementById('daysBtn').addEventListener('click',()=>
    seconds.value = days.value * 60 * 60 * 24)
   
    document.getElementById('hoursBtn').addEventListener('click',()=>
    minutes.value = hours.value * 60)
    document.getElementById('hoursBtn').addEventListener('click',()=>
    days.value = hours.value / 24)
    document.getElementById('hoursBtn').addEventListener('click',()=>
    seconds.value = hours.value * 60 * 60)

    document.getElementById('minutesBtn').addEventListener('click',()=>
    days.value = minutes.value / 60 / 24)
    document.getElementById('minutesBtn').addEventListener('click',()=>
    hours.value = minutes.value / 60)
    document.getElementById('minutesBtn').addEventListener('click',()=>
    seconds.value = minutes.value * 60)

    document.getElementById('secondsBtn').addEventListener('click',()=>
    days.value = seconds.value / 60 / 60 / 24)
    document.getElementById('secondsBtn').addEventListener('click',()=>
    hours.value = seconds.value / 60 / 60)
    document.getElementById('secondsBtn').addEventListener('click',()=>
    minutes.value = seconds.value / 60)
}