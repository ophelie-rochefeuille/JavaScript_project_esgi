function openHorloge()
{
    width = screen.width/2;
    height = screen.height/2 ;
    top = (screen.height/2)-(width/2);
    left = (screen.width/2)-(height/2);
    window.open('/components/horloge/horloge.html', 'test', 'width='+width+', height='+height+', top='+top+', left='+left+'');
}

