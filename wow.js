var day = document.getElementById('day'),
    hour = document.getElementById('hour'),
    min = document.getElementById('min'),
    d3a = document.getElementById('d3a'),
    second = document.getElementById('second');

setInterval(() => {
    var dateDay = 13 - new Date().getDate()
        dateHour = 24 - new Date().getHours(),
        dateMin = 59 - new Date().getMinutes(),
        dateSeconds = 60 - new Date().getSeconds();

    day.innerHTML = dateDay;
    hour.innerHTML = dateHour;
    min.innerHTML = dateMin;
    second.innerHTML = dateSeconds;
})


var ad3iya = [ 'اللَّهُمَّ أنَْتَ رَبيِّ لَا إلِهََ إلَِّا أنَتَ، خَلَقْتنَيِ وَأنََا عَبدُْكَ، وَأنََا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.',
    'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّك أَنْتَ الْغَفُورُ الرَّحِيمُ. ',
    'رَبِّ اغْفِرْ لِي خَطِيئَتِي وَجَهْلِي وَإِسْرَافِي فِي أَمْرِي كُلِّهِ وَمَا أَنْتَ أَعْلَمُ بِهِ مِنِّي، اللَّهُمَّ اغْفِرْ لِي خَطَايَايَ وَعَمْدِي وَجَهْلِي وَهَزْلِي، وَكُلُّ ذَلِكَ عِنْدِي، اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَسْرَرْتُ وَمَا أَعْلَنْتُ أَنْتَ الْمُقَدِّمُ وَأَنْتَ الْمُؤَخِّرُ وَأَنْتَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. ',
    'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ.',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْجُبْنِ وَالْبُخْلِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ.',
    'اللَّهُمَّ إنِِّي أَعُوذُ بكَِ مِنَ الْبُخْلِ، وَأَعُوذُ بكَِ مِنَ الْجُبْنِ، وَأَعُوذُ بكَِ أَنْ أُرَدَّ إلَِى أَرْذَلِ الْعُمُرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الدُّنْيَا، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ. ',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكَسَلِ وَالْهَرَمِ وَالْمَأْثَمِ وَالْمَغْرَمِ، وَمِنْ فِتْنَةِ الْقَبْرِ وَعَذَابِ الْقَبْرِ، وَمِنْ فِتْنَةِ النَّارِ وَعَذَابِ النَّارِ، وَمِنْ شَرِّ فِتْنَةِ الْغِنَى، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْفَقْرِ، وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ، اللَّهُمَّ اغْسِلْ عَنِّي خَطَايَايَ بِمَاءِ الثَّلْجِ وَالْبَرَدِ، وَنَقِّ قَلْبِي مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ، وَبَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ.',
    'اللَّهُمَّ رَبَّ السَّمَوَاتِ وَرَبَّ الْأَرْضِ وَرَبَّ الْعَرْشِ الْعَظِيمِ، رَبَّنَا وَرَبَّ كُلِّ شَيْءٍ، فَالِقَ الْحَبِّ وَالنَّوَى وَمُنْزِلَ التَّوْرَاةِ وَالْإِنْجِيلِ وَالْفُرْقَانِ، أَعُوذُ بِكَ مِنْ شَرِّ كُلِّ شَيْءٍ أَنْتَ آخِذٌ بِنَاصِيَتهِِ، اللَّهُمَّ أَنْتَ الْأوََّلُ فَلَيْسَ قَبْلَكَ شَيْءٌ، وَأَنْتَ الْآخِرُ فَلَيْسَ بَعْدَكَ شَيْءٌ، وَأَنْتَ الظَّاهِرُ فَلَيْسَ فَوْقَكَ شَيْءٌ، وَأَنْتَ الْبَاطِنُ فَلَيْسَ دُونَكَ شَيْءٌ، اقْضِ عَنَّا الدَّيْنَ وَأَغْنِنَا مِنَ الْفَقْرِ. ',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ مَا عَمِلْتُ وَمِنْ شَرِّ مَا لَمْ أَعْمَلْ.',
    'اللَّهُمَّ أَصْلِحْ لِي دِينِي الَّذِي هُوَ عِصْمَةُ أَمْرِي، وَأَصْلِحْ لِي دُنْيَايَ الَّتِي فِيهَا مَعَاشِي، وَأَصْلِحْ لِي آخِرَتِي الَّتِي فِيهَا مَعَادِي وَاجْعَلِ الْحَيَاةَ زِيَادَةً لِي فِي كُلِّ خَيْرٍ، وَاجْعَلِ الْمَوْتَ رَاحَةً لِي مِنْ كُلِّ شَرٍّ.',
    'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَالْهَرَمِ وَعَذَابِ الْقَبْرِ، اللَّهُمَّ آتِ نَفْسِي تَقْوَاهَا وَزَكِّهَا أَنْتَ خَيْرُ مَنْ زَكَّاهَا، أَنْتَ وَلِيُّهَا وَمَوْلَاهَا، اللَّهُمَّ إنِِّي أَعُوذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ، وَمِنْ قَلْبٍ لَا يَخْشَعُ، وَمِنْ نَفْسٍ لَا تَشْبَعُ، وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا. ',
    'اللَّهُمَّ لَكَ أَسْلَمْتُ وَبِكَ آمَنْتُ، وَعَلَيْكَ تَوَكَّلْتُ وَإِلَيْكَ أَنَبْتُ وَبِكَ خَاصَمْتُ، اللَّهُمَّ إِنِّي أَعُوذُ بِعِزَّتِكَ لَا إِلَهَ إِلَّا أَنْتَ أَنْ تُضِلَّنيِ، أَنْتَ الْحَيُّ الَّذِي لَا يَمُوتُ وَالْجِنُّ وَالْإِنْسُ يَمُوتُونَ.',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ. ',
    'اللَّهُمَّ مُصَرِّفَ الْقُلُوبِ صَرِّفْ قُلُوبَنَا عَلَى طَاعَتِكَ.',
    'اللَّهُمَّ رَبَّ جَبْرَائِيلَ وَمِيكَائِيلَ وَإِسْرَافِيلَ، فَاطِرَ السَّمَوَاتِ وَالأَرْضِ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، أَنْتَ تَحْكُمُ بَيْنَ عِبَادِكَ فِيمَا كَانُوا فِيهِ يَخْتَلِفُونَ، اهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ، إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُسْتَقِيمٍ.',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ، وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ، وَأَعُوذُ بِكَ مِنْكَ، لَا أُحْصِي ثَنَاءً عَلَيْكَ، أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ.',
    'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ جَهْدِ الْبَلَاءِ وَدَرَكِ الشَّقَاءِ وَسُوءِ الْقَضَاءِ وَشَمَاتَةِ الْأَعْدَاءِ.',
    'اللَّهُمَّ اجْعَلْ لِي فِي قَلْبِي نُورًا، وَفِي لِسَانِي نُورًا، وَفِي سَمْعِي نُورًا، وَفِي بَصَرِي نُورًا، وَمِنْ فَوْقِي نُورًا، وَمِنْ تَحْتِي نُورًا، وَعَنْ يَمِينِي نُورًا، وَعَنْ شِمَالِي نُورًا، وَمِنْ بَيْنِ يَدَيَّ نُورًا، وَمِنْ خَلْفِي نُورًا، وَاجْعَلْ فِي نَفْسِي نُورًا، وَأَعْظِمْ لِي نُورًا.',
    'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنَ الْخَيْرِ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَم،ْ وَأَعُوذُ بِكَ مِنَ الشَّرِّ كُلِّهِ عَاجِلِهِ وَآجِلِهِ مَا عَلِمْتُ مِنْهُ وَمَا لَمْ أَعْلَمْ، اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ خَيْرِ مَا سَأَلَكَ عَبْدُكَ وَنَبِيُّكَ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا عَاذَ بِهِ عَبْدُكَ وَنَبِيُّكَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ، وَأَعُوذُ بِكَ مِنَ النَّارِ وَمَا قَرَّبَ إِلَيْهَا مِنْ قَوْلٍ أَوْ عَمَلٍ وَأَسْأَلُكَ أَنْ تَجْعَلَ كُلَّ قَضَاءٍ قَضَيْتَهُ لِي خَيْرًا.',
    'اللَّهُمَّ بِعِلْمِكَ الْغَيْبَ وَقُدْرَتِكَ عَلَى الْخَلْقِ أَحْيِنِي مَا عَلِمْتَ الْحَيَاةَ خَيْرًا لِي، وَتَوَفَّنِي إِذَا عَلِمْتَ الْوَفَاةَ خَيْرًا لِي، اللَّهُمَّ وَأَسْأَلُكَ خَشْيَتَكَ فِي الْغَيْبِ وَالشَّهَادَةِ، وَأَسْأَلُكَ كَلِمَةَ الْحَقِّ فِي الرِّضَا وَالْغَضَبِ، وَأَسْأَلُكَ الْقَصْدَ فِي الْفَقْرِ وَالْغِنَى، وَأَسْأَلُكَ نَعِيمًا لَا يَنْفَدُ، وَأَسْأَلُكَ قُرَّةَ عَيْنٍ لَا تَنْقَطِعُ، وَأَسْأَلُكَ الرِّضَاءَ بَعْدَ الْقَضَاءِ، وَأَسْأَلُكَ بَرْدَ الْعَيْشِ بَعْدَ الْمَوْتِ، وَأَسْأَلُكَ لَذَّةَ النَّظَرِ إِلَى وَجْهِكَ وَالشَّوْقَ إِلَى لِقَائِكَ فِي غَيْرِ ضَرَّاءَ مُضِرَّةٍ وَلَا فِتْنَةٍ مُضِلَّةٍ، اللَّهُمَّ زَيِّنَّا بِزِينَةِ الْإِيمَانِ، وَاجْعَلْنَا هُدَاةً مُهْتَدِينَ.',
    'اللَّهُمَّ إِنِّي أَسْأَلُكَ العَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، وَاحْفَظنْيِ مِنْ بيَنِْ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينيِ وَعَنْ شِمَاليِ وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
    'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَشَرِّ الشَّيْطَانِ وَشِرْكِهِ. ',
    'اللَّهُمَّ إِنِّي أَسْأَلُكَ الثَّبَاتَ فِي الأَمْرِ، وَالْعَزِيمَةَ عَلَى الرُّشْدِ، وَأَسْأَلُكَ مُوجِبَاتِ رَحْمَتكَِ، وَعَزَائمَِ مَغْفِرَتكَِ، وَأسَْألَكَُ شُكْرَ نعِْمَتكَِ، وَحُسْنَ عِباَدَتكَِ، وَأسَْألَكَُ قَلْبًا سَلِيمًا، وَلِسَانًا صَادِقًا، وَأَسْأَلُكَ مِنْ خَيْرِ مَا تَعْلَمُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا تَعْلَمُ، وَأَسْتَغْفِرُكَ لِمَا تَعْلَمُ، إِنَّكَ أَنْتَ عَلَّامُ الْغُيُوبِ. ',
    'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إلَِهَ إلَِّا أَنْتَ، اللَّهُمَّ إنِِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اللَّهُمَّ إنِِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَهَ إِلَّا أَنْتَ.',
    'رَبِّ أَعِنِّي وَلَا تُعِنْ عَلَيَّ، وَانْصُرْنِي وَلَا تَنْصُرْ عَلَيَّ، وَامْكُرْ لِي وَل َاتَمْكُرْ عَلَيَّ، وَاهْدِنِي وَيَسِّرِ الْهُدَى لِي، وَانْصُرْنِي عَلَى مَنْ بَغَى عَلَيَّ، رَبِّ اجْعَلْنِي لَكَ شَكَّارًا، لَكَ ذَكَّارًا، لَكَ رَهَّابًا، لَكَ مِطْوَاعًا، لَكَ مُخْبِتًا إِلَيْكَ أَوَّاهًا مُنِيبًا، رَبِّ تَقَبَّلْ تَوْبَتِي وَاغْسِلْ حَوْبَتِي وَأَجِبْ دَعْوَتِي وَثَبِّتْ حُجَّتِي وَسَدِّدْ لِسَانِي وَاهْدِ قَلْبِي وَاسْلُلْ سَخِيمَةَ صَدْرِي.',
    'اللَّهُمَّ لَكَ الْحَمْدُ كُلُّهُ، اللَّهُمَّ لَا قَابِضَ لِمَا بَسَطْتَ، وَلَا بَاسِطَ لِمَا قَبَضْتَ، وَلَا هَادِيَ لِمَا أَضْلَلْت، وَلَا مُضِلَّ لِمَنْ هَدَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُقَرِّبَ لِمَا بَاعَدْتَ، وَلَا مُبَاعِدَ لِمَا قَرَّبْتَ، اللَّهُمَّ ابْسُطْ عَلَيْنَا مِنْ بَرَكَاتِكَ وَرَحْمَتِكَ وَفَضْلِكَ وَرِزْقِكَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ النَّعِيمَ الْمُقِيمَ الَّذِي لَا يَحُولُ وَلَا يَزُولُ، اللَّهُمَّ إِنِّي أَسْأَلُكَ النَّعِيمَ يَوْمَ الْعَيْلَةِ، وَالْأَمْنَ يَوْمَ الْخَوْفِ، اللَّهُمَّ إنِِّي عَائذٌِ بكَِ مِنْ شَرِّ مَا أَعْطَيْتَنَا وَشَرِّ مَا مَنَعْتَ، اللَّهُمَّ حَبِّبْ إلَِيْنَا الْإِيمَانَ وَزَيِّنْهُ فيِ قُلُوبِنَا، وَكَرِّهْ إِلَيْنَا الْكُفْرَ وَالْفُسُوقَ وَالْعِصْيَانَ، وَاجْعَلْنَا مِنَ الرَّاشِدِينَ، اللَّهُمَّ تَوَفَّنَا مُسْلِمِينَ، وَأَحْيِنَا مُسْلِمِينَ، وَأَلْحِقْنَا بِالصَّالِحِينَ غَيْرَ خَزَايَا وَلَا مَفْتُونِينَ، اللَّهُمَّ قَاتِلْ الْكَفَرَةَ الَّذِينَ يُكَذِّبُونَ رُسُلَكَ، وَيَصُدُّونَ عَنْ سَبِيلِكَ، وَاجْعَلْ عَلَيْهِمْ رِجْزَكَ وَعَذَابَكَ، اللَّهُمَّ قَاتِلْ الْكَفَرَةَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَهَ الْحَقِّ.',
    'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللّٰهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    'رَبَّنَا ظَلَمْنَا أَنْفُسَنَا وَإِنْ لَمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
    'لَا إِلَهَ إِلا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ',
    'رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ',
    'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا إِنَّكَ أَنْتَ الْعَزِيزُ الْحَكِيمُ',
    'رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ',
    'رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
    'رَبَّنَا آمَنَّا فَاكْتُبْنَا مَعَ الشَّاهِدِينَ',
    'رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ',
    'رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا إِنَّكَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    'رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَحِيمٌ',
    'رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنْتَ السَّمِيعُ الْعَلِيمُ * رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ وَمِنْ ذُرِّيَّتِنَا أُمَّةً مُسْلِمَةً لَكَ وَأَرِنَا مَنَاسِكَنَا وَتُبْ عَلَيْنَا إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ',
    'رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ * وَنَجِّنَا بِرَحْمَتِكَ مِنَ الْقَوْمِ الْكَافِرِينَ',
    'رَبَّنَا آتِنَا مِنْ لَدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
    'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا',
    'رَبَّنَا اصْرِفْ عَنَّا عَذَابَ جَهَنَّمَ إِنَّ عَذَابَهَا كَانَ غَرَامًا * إِنَّهَا سَاءَتْ مُسْتَقَرًّا وَمُقَامًا',
    'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّار سَمِعْنَا وَأَطَعْنَا غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ',
    'رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ',
    'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً إِنَّكَ أَنْتَ الْوَهَّابُ * رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَا رَيْبَ فِيهِ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ',
    'رَبَّنَا مَا خَلَقْتَ هَذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ * رَبَّنَا إِنَّكَ مَنْ تُدْخِلِ النَّارَ فَقَدْ أَخْزَيْتَهُ وَمَا لِلظَّالِمِينَ مِنْ أَنْصَارٍ * رَبَّنَا إِنَّنَا سَمِعْنَا مُنَادِيًا يُنَادِي لِلْإِيمَانِ أَنْ آمِنُوا بِرَبِّكُمْ فَآمَنَّا رَبَّنَا فَاغْفِرْ لَنَا ذُنُوبَنَا وَكَفِّرْ عَنَّا سَيِّئَاتِنَا وَتَوَفَّنَا مَعَ الْأَبْرَارِ * رَبَّنَا وَآتِنَا مَا وَعَدْتَنَا عَلَى رُسُلِكَ وَلَا تُخْزِنَا يَوْمَ الْقِيَامَةِ إِنَّكَ لَا تُخْلِفُ الْمِيعَادَ',
    'رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ} {رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَدْخِلْنِي بِرَحْمَتِكَ فِي عِبَادِكَ الصَّالِحِينَ',
    'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِنْ ذُرِّيَّتِي رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
    'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ وَأَنْ أَعْمَلَ صَالِحًا تَرْضَاهُ وَأَصْلِحْ لِي فِي ذُرِّيَّتِي إِنِّي تُبْتُ إِلَيْكَ وَإِنِّي مِنَ الْمُسْلِمِينَ',
    'رَبِّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي',
    'رَبِّ اشْرَحْ لِي صَدْرِي * وَيَسِّرْ لِي أَمْرِي * وَاحْلُلْ عُقْدَةً مِنْ لِسَانِي * يَفْقَهُوا قَوْلِي',
    'رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي أَكُنْ مِنَ الْخَاسِرِينَ',
    'رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ * وَاجْعَلْ لِي لِسَانَ صِدْقٍ فِي الْآخِرِينَ * وَاجْعَلْنِي مِنْ وَرَثَةِ جَنَّةِ النَّعِيمِ',
    'رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ وَلَا تَزِدِ الظَّالِمِينَ إِلا تَبَارًا',
    'رَبِّ هَبْ لِي مِنْ لَدُنْكَ ذُرِّيَّةً طَيِّبَةً إِنَّكَ سَمِيعُ الدُّعَاءِ',
    'رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنْتَ خَيْرُ الْوَارِثِينَ',
    'رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ',
    'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ خَيْرُ الرَّاحِمِينَ',
    'رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ * وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ',
    'رَبِّ زِدْنِي عِلْمًا',
    'رَبِّ أَدْخِلْنِي مُدْخَلَ صِدْقٍ وَأَخْرِجْنِي مُخْرَجَ صِدْقٍ وَاجْعَلْ لِي مِنْ لَدُنْكَ سُلْطَانًا نَصِيرًا',
    'رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ',
    'رَبِّ بِمَا أَنْعَمْتَ عَلَيَّ فَلَنْ أَكُونَ ظَهِيرًا لِلْمُجْرِمِينَ',
    'رَبِّ انْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ',
    'اسْتَغْفِرُوا',
    'اُذْكُرُوا اللَّهَ',
    ];

    d3a.innerHTML = ad3iya[Math.floor(Math.random() * ad3iya.length)];
