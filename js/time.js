function updateTime() {
    //Europe/Belgrade
    var now = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
    now = new Date(now);

    var hours = now.getHours();
    var minutes = now.getMinutes();
    
    // Преобразование 24-часового формата в 12-часовой формат и установка AM/PM
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12; 
    hours = hours ? hours : 12; // Час '0' должен быть '12'
    
    minutes = minutes < 10 ? '0'+minutes : minutes;

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('colon').innerHTML = ":";
    document.getElementById('minutes').innerHTML = minutes + ampm;
}

setInterval(updateTime,1000);
updateTime(); // Начальный вызов для немедленного отображения
