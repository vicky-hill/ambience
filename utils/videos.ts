const videos = {
    latte: [
        { title: 'Vietnamese Full Care Course 🌺✨', videoId: '4CkTBn014hw', image: 'latte-48.png' },
        { title: 'ASMR Soft Haircut & Makeup with Wooden Tools 🎀', videoId: 'qO-K3D9BdzY', image: 'latte-47.png' },
        { title: 'My Favorite Personal Attention Triggers To You 💜', videoId: 'iY0Pu0u2Yzs', image: 'latte-46.png' },
        { title: 'Let Me Clean Your Face Well 😊', videoId: 'VDJjOC0hNGI', image: 'latte-45.png' },
        { title: 'Healing Pamper Night 🌙', videoId: 'II_jHdL9AW0', image: 'latte-44.png' },
        { title: 'Sleepy Eyelash Extensions & Lip Treatment 💜', videoId: 'rLj3hkPSaAk', image: 'latte-43.png' },
        { title: 'Take a Cool Nap in a Summer Day 🍉', videoId: 'KIvtRAXr-QY', image: 'latte-42.png' },
        { title: 'Relaxing Face Treatment 😌', videoId: 'xqoRFiLOweo', image: 'latte-41.png' },
        { title: 'Only For Your Sleep 🌙', videoId: 'DoirTSeqX5A', image: 'latte-40.png' },
        { title: 'ASMR Backstage Idol Makeup & Hair Styling 🎤🎀', videoId: 'N6ZApDpK2Gc', image: 'latte-39.png' },
        { title: 'Doing Your Lovely Pink Makeup 🎀', videoId: 'JcSrOpFKfQM', image: 'latte-38.png' },
        { title: 'ASMR Face Lift & Contour Massage', videoId: 'vPOLJ-MDIyI', image: 'latte-37.png' },
        { title: 'ASMR Dermaplaning Facial Treatment', videoId: 'mQv1qjIhhOE', image: 'latte-36.png' },
        { title: 'ASMR Physical Therapy & Aroma Massage 💤', videoId: 'fk-YH0cWc6U', image: 'latte-35.png' },
        { title: 'ASMR Chinese Eye Cleaning 👁️✨', videoId: 'bPTSdK-GDPM', image: 'latte-34.png' },
        { title: 'Sleep With Good Mood 💓', videoId: 'ZD67afkURFQ', image: 'latte-33.png' },
        { title: 'ASMR Autumn Night 🍂', videoId: 'AcLyZUs9hgg', image: 'latte-32.png' },
        { title: 'Summer Ocean Spa 🌊', videoId: 'EiQ7X7rzeAk', image: 'latte-31.png' },
        { title: 'Spring Flower Head Spa 🌸', videoId: '_CPSbDlAVlY', image: 'latte-30.png' },
        { title: 'Healing Facial Therapy 🌿', videoId: '_AxKXEm1vOI', image: 'latte-29.png' },
        { title: 'ASMR Relaxing Face Adjustment 🌟', videoId: 'JYbSw1_kgLg', image: 'latte-28.png' },
        { title: 'ASMR Night Nurse Taking Care of You 🩺', videoId: 'wwDL6Kxu1xA', image: 'latte-27.png' },
        { title: 'ASMR Facial Lymph Drainage Massage 🌷', videoId: '37ASrTbntxA', image: 'latte-26.png' },
        { title: 'ASMR Delicate & In-Depth Facial Skin Exam', videoId: 'Q089kFWhP5Q', image: 'latte-25.png' },
        { title: 'SMR Sleep Therapist Visit 🌙', videoId: 'BDHgeoRpPy0', image: 'latte-24.png' },
        { title: 'ASMR Rlaxing Sleep Exam 💤', videoId: 'HeCSMKuvmvM', image: 'latte-23.png' },
        { title: 'ASMR Relax with gentle massage care', videoId: 'sFnLvZmyx48', image: 'latte-22.png' },
        { title: 'ASMR Energy Healing clinic 🔮', videoId: '-Tu1jjB5KWM', image: 'latte-20.png' },
         { title: 'ASMR Dermatologist Facial Treatment', videoId: 'gjZnH-Wmf4g', image: 'latte-19.png' },
        { title: 'ASMR Comprehensive Medical Exam', videoId: 'FMFDl_S2mOQ', image: 'latte-18.png' },
        { title: 'Sleepy Facial Treatment ✨', videoId: 'Jn8r8kUB9Mo', image: 'latte-17.png' },
        { title: 'Plant Doctors Office 🌿', videoId: 'mVfvtf2-E7Q', image: 'latte-16.png' },
        { title: 'ASMR Palpating Your Face and Scalp 👐', videoId: 'UiDqTDgtxsI', image: 'latte-15.png' },
        { title: 'ASMR Dream Makeup Salon 💗', videoId: 'rLEBL4RibcA', image: 'latte-14.png' },
        { title: 'ASMR Flight Attendant Sleep Care Service ✈️', videoId: 'JaqesAupcVA', image: 'latte-13.png' },
        { title: 'ASMR Detailed Face Analysis For Your Sleep', videoId: 'D32F06ggHmQ', image: 'latte-12.png' },
        { title: 'ASMR School Nurses Office 💛', videoId: 'aI0Ub6ApXv4', image: 'latte-11.png' },
        { title: 'Relaxing ASMR Clinic 😌', videoId: 'fGPzNcyvYlw', image: 'latte-10.png' },
        { title: 'ASMR Full Body Physical Exam', videoId: '7chmbcMe0H4', image: 'latte-9.png' },
        { title: 'ASMR Ear, Nose & Throat Examination', videoId: 'PHPbj9laf28', image: 'latte-8.png' },
        { title: 'ASMR Face Mapping Clinic 😌', videoId: 'ru0apZSeNxc', image: 'latte-7.png' },
        { title: 'Botox Treatment & Lip Fillers 💉', videoId: 'orRJPguYG1s', image: 'latte-6.png' },
        { title: 'Measuring Your Face 📏', videoId: 'JgK51SSymKk', image: 'latte-5.png' },
        { title: 'Im Your Sleep Doctor Tonight 💕', videoId: 'QlexpFO6SzU', image: 'latte-4.png' },
        { title: 'ASMR Cranial Nerve Exam 📋', videoId: 'iu9kNDArCuw', image: 'latte-3.png' },
        { title: 'ASMR Eye Relaxation Clinic 🌼', videoId: 'zUMPpjlauwU', image: 'latte-2.png' },
        { title: 'School Nurse Lice Check 💙', videoId: 'b2MS4lyITk8', image: 'latte-1.png' }
    ],
    ambience: [

    ],
    reading: [

    ]
}

export default videos;