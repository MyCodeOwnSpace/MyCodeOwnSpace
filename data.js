// data.js (示例，請確保所有醫師都有這些完整的英文評分數據)
const doctorsData = [
    {
        "name": "Dr. Elena Liu",
        "hospital": "Taipei Veterans General Hospital",
        "city": "Taipei",
        "gender": "female",
        "specialty": "Neurology",
        "image": "https://randomuser.me/api/portraits/women/45.jpg",
        "rating": 4.5,
        "tags": ["Empathy", "Clarity"],
        "reviewDetails": [
            {
                "topic": "Caring and precise",
                "comment": "非常細心且富有同情心。她以優雅和專業的態度幫助我父親度過了艱難的診斷期。"
            }
        ],
        "fullProfile": {
            "experience": "12 years",
            "reviewsCount": 35,
            "avgRatings": {
                "Explanation": 3.9,   // Changed to English
                "Needs Met": 4.1,     // Changed to English
                "Discuss Goals": 4.4, // Changed to English
                "Accessibility": 3.7, // Changed to English
                "Overall": 4.2        // Changed to English
            },
            "recommendationPercentage": "88%",
            "summarizedComment": "Patients mention Dr. Elena Liu's clear communication, minimal waiting, supportive approach."
        }
    },
    {
        "name": "Dr. Michael Chen",
        "hospital": "National Taiwan University Hospital",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Cardiology",
        "image": "https://randomuser.me/api/portraits/men/33.jpg",
        "rating": 4.8,
        "tags": ["Experienced", "Thorough"],
        "reviewDetails": [
            {
                "topic": "Highly recommended",
                "comment": "陳醫師的專業知識和豐富經驗讓我對治療充滿信心。他解釋得很清楚，讓我了解所有選項。"
            }
        ],
        "fullProfile": {
            "experience": "10 years",
            "reviewsCount": 28,
            "avgRatings": {
                "Explanation": 4.1,
                "Needs Met": 4.5,
                "Discuss Goals": 4.2,
                "Accessibility": 4.0,
                "Overall": 4.3
            },
            "recommendationPercentage": "92%",
            "summarizedComment": "Dr. Chen is highly professional, provides clear explanations, and is very thorough in his examinations."
        }
    },
    {
        "name": "Dr. Sophia Lin",
        "hospital": "Chang Gung Memorial Hospital, Linkou",
        "city": "Taoyuan",
        "gender": "female",
        "specialty": "Pediatrics",
        "image": "https://randomuser.me/api/portraits/women/62.jpg",
        "rating": 4.7,
        "tags": ["Child-friendly", "Patient"],
        "reviewDetails": [
            {
                "topic": "Great with kids",
                "comment": "林醫師對待孩子非常有耐心，她能讓我的小孩感到放鬆。問診仔細，給的建議也很實用。"
            }
        ],
        "fullProfile": {
            "experience": "8 years",
            "reviewsCount": 42,
            "avgRatings": {
                "Explanation": 4.5,
                "Needs Met": 4.7,
                "Discuss Goals": 4.6,
                "Accessibility": 4.3,
                "Overall": 4.7
            },
            "recommendationPercentage": "95%",
            "summarizedComment": "Dr. Lin is patient and great with children, providing practical advice."
        }
    },
    {
        "name": "Dr. David Huang",
        "hospital": "Taipei Medical University Hospital",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Orthopedics",
        "image": "https://randomuser.me/api/portraits/men/78.jpg",
        "rating": 4.6,
        "tags": ["Skilled", "Communicative"],
        "reviewDetails": [
            {
                "topic": "Excellent surgeon",
                "comment": "黃醫師的骨科手術技術精湛，術後恢復良好。他也很擅長與病人溝通，讓我了解整個治療過程。"
            }
        ],
        "fullProfile": {
            "experience": "15 years",
            "reviewsCount": 50,
            "avgRatings": {
                "Explanation": 4.6,
                "Needs Met": 4.7,
                "Discuss Goals": 4.5,
                "Accessibility": 4.2,
                "Overall": 4.6
            },
            "recommendationPercentage": "90%",
            "summarizedComment": "Dr. Huang is a skilled surgeon with excellent communication."
        }
    },
    {
        "name": "Dr. Amy Wang",
        "hospital": "China Medical University Hospital",
        "city": "Taichung",
        "gender": "female",
        "specialty": "Dermatology",
        "image": "https://randomuser.me/api/portraits/women/21.jpg",
        "rating": 4.4,
        "tags": ["Effective", "Gentle"],
        "reviewDetails": [
            {
                "topic": "Solved my skin issue",
                "comment": "王醫師開的藥很有效，我的皮膚問題很快就改善了。她問診很溫和，感覺很舒服。"
            }
        ],
        "fullProfile": {
            "experience": "7 years",
            "reviewsCount": 30,
            "avgRatings": {
                "Explanation": 4.3,
                "Needs Met": 4.4,
                "Discuss Goals": 4.2,
                "Accessibility": 4.1,
                "Overall": 4.4
            },
            "recommendationPercentage": "85%",
            "summarizedComment": "Dr. Wang provides effective and gentle treatment for skin conditions."
        }
    },
    {
        "name": "Dr. Kevin Lee",
        "hospital": "Kaohsiung Medical University Hospital",
        "city": "Kaohsiung",
        "gender": "male",
        "specialty": "Gastroenterology",
        "image": "https://randomuser.me/api/portraits/men/51.jpg",
        "rating": 4.9,
        "tags": ["Expert", "Trustworthy"],
        "reviewDetails": [
            {
                "topic": "Saved my life",
                "comment": "李醫師是腸胃科的專家，他精準的診斷和治療挽救了我的生命。我非常信任他。"
            }
        ],
        "fullProfile": {
            "experience": "20 years",
            "reviewsCount": 60,
            "avgRatings": {
                "Explanation": 4.8,
                "Needs Met": 4.9,
                "Discuss Goals": 4.9,
                "Accessibility": 4.7,
                "Overall": 4.9
            },
            "recommendationPercentage": "98%",
            "summarizedComment": "Dr. Lee is a highly trusted expert in gastroenterology with accurate diagnoses."
        }
    },
    {
        "name": "Dr. Grace Chen",
        "hospital": "Hualien Tzu Chi Hospital",
        "city": "Hualien",
        "gender": "female",
        "specialty": "Ophthalmology",
        "image": "https://randomuser.me/api/portraits/women/8.jpg",
        "rating": 4.3,
        "tags": ["Detailed", "Patient"],
        "reviewDetails": [
            {
                "topic": "Caring eye doctor",
                "comment": "陳醫師檢查眼睛非常仔細，解釋得很清楚。她對待病患很有耐心，是位值得信賴的眼科醫師。"
            }
        ],
        "fullProfile": {
            "experience": "10 years",
            "reviewsCount": 25,
            "avgRatings": {
                "Explanation": 4.2,
                "Needs Met": 4.3,
                "Discuss Goals": 4.1,
                "Accessibility": 4.0,
                "Overall": 4.3
            },
            "recommendationPercentage": "87%",
            "summarizedComment": "Dr. Chen is a detailed and patient eye doctor who clearly explains conditions."
        }
    },
    {
        "name": "Dr. Alex Chou",
        "hospital": "National Cheng Kung University Hospital",
        "city": "Tainan",
        "gender": "male",
        "specialty": "Urology",
        "image": "https://randomuser.me/api/portraits/men/19.jpg",
        "rating": 4.5,
        "tags": ["Professional", "Efficient"],
        "reviewDetails": [
            {
                "topic": "Highly professional",
                "comment": "周醫師非常專業，問診和檢查都很有效率。他的治療方案讓我恢復得很快。"
            }
        ],
        "fullProfile": {
            "experience": "14 years",
            "reviewsCount": 40,
            "avgRatings": {
                "Explanation": 4.5,
                "Needs Met": 4.6,
                "Discuss Goals": 4.5,
                "Accessibility": 4.3,
                "Overall": 4.5
            },
            "recommendationPercentage": "89%",
            "summarizedComment": "Dr. Chou is a professional and efficient urologist providing effective treatment."
        }
    },
    {
        "name": "Dr. Jessica Kuo",
        "hospital": "E-Da Hospital",
        "city": "Kaohsiung",
        "gender": "female",
        "specialty": "Endocrinology",
        "image": "https://randomuser.me/api/portraits/women/30.jpg",
        "rating": 4.6,
        "tags": ["Knowledgeable", "Supportive"],
        "reviewDetails": [
            {
                "topic": "Excellent care",
                "comment": "郭醫師對內分泌疾病有深入的了解，她提供了很多有用的建議，並給予我很大的支持。"
            }
        ],
        "fullProfile": {
            "experience": "11 years",
            "reviewsCount": 38,
            "avgRatings": {
                "Explanation": 4.6,
                "Needs Met": 4.7,
                "Discuss Goals": 4.5,
                "Accessibility": 4.4,
                "Overall": 4.6
            },
            "recommendationPercentage": "91%",
            "summarizedComment": "Dr. Kuo is knowledgeable in endocrinology and provides supportive care."
        }
    },
    {
        "name": "Dr. Robert Wu",
        "hospital": "Shin Kong Wu Ho-Su Memorial Hospital",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Pulmonology",
        "image": "https://randomuser.me/api/portraits/men/91.jpg",
        "rating": 4.7,
        "tags": ["Accurate", "Calm"],
        "reviewDetails": [
            {
                "topic": "Precise diagnosis",
                "comment": "吳醫師的診斷非常準確，他讓我對自己的肺部問題有了清楚的認識。他的態度很沉穩，讓人安心。"
            }
        ],
        "fullProfile": {
            "experience": "18 years",
            "reviewsCount": 55,
            "avgRatings": {
                "Explanation": 4.7,
                "Needs Met": 4.8,
                "Discuss Goals": 4.7,
                "Accessibility": 4.6,
                "Overall": 4.7
            },
            "recommendationPercentage": "94%",
            "summarizedComment": "Dr. Wu provides accurate diagnoses and a calming presence for pulmonary issues."
        }
    },
    {
        "name": "Dr. Cindy Chang",
        "hospital": "Mackay Memorial Hospital",
        "city": "Taipei",
        "gender": "female",
        "specialty": "Obstetrics and Gynecology",
        "image": "https://randomuser.me/api/portraits/women/70.jpg",
        "rating": 4.8,
        "tags": ["Warm", "Experienced"],
        "reviewDetails": [
            {
                "topic": "Wonderful OB/GYN",
                "comment": "張醫師非常溫暖且經驗豐富，讓我在懷孕期間感到安心。她提供最好的照護。"
            }
        ],
        "fullProfile": {
            "experience": "16 years",
            "reviewsCount": 65,
            "avgRatings": {
                "Explanation": 4.8,
                "Needs Met": 4.9,
                "Discuss Goals": 4.8,
                "Accessibility": 4.7,
                "Overall": 4.8
            },
            "recommendationPercentage": "96%",
            "summarizedComment": "Dr. Chang is a warm and experienced OB/GYN providing excellent care during pregnancy."
        }
    },
    {
        "name": "Dr. Eric Lin",
        "hospital": "Taipei City Hospital Renai Branch",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Family Medicine",
        "image": "https://randomuser.me/api/portraits/men/4.jpg",
        "rating": 4.2,
        "tags": ["Friendly", "Comprehensive"],
        "reviewDetails": [
            {
                "topic": "Great family doctor",
                "comment": "林醫師很友善，對各種疾病都有基本的了解，是我們全家人的家庭醫師。很方便。"
            }
        ],
        "fullProfile": {
            "experience": "9 years",
            "reviewsCount": 30,
            "avgRatings": {
                "Explanation": 4.1,
                "Needs Met": 4.2,
                "Discuss Goals": 4.0,
                "Accessibility": 3.9,
                "Overall": 4.2
            },
            "recommendationPercentage": "80%",
            "summarizedComment": "Dr. Lin is a friendly family doctor providing comprehensive care."
        }
    },
    {
        "name": "Dr. Olivia Hsieh",
        "hospital": "Tri-Service General Hospital",
        "city": "Taipei",
        "gender": "female",
        "specialty": "Rheumatology",
        "image": "https://randomuser.me/api/portraits/women/12.jpg",
        "rating": 4.5,
        "tags": ["Insightful", "Empathetic"],
        "reviewDetails": [
            {
                "topic": "Understanding doctor",
                "comment": "謝醫師對風濕病有獨到的見解，她非常理解病患的痛苦，並提供貼心的治療建議。"
            }
        ],
        "fullProfile": {
            "experience": "13 years",
            "reviewsCount": 45,
            "avgRatings": {
                "Explanation": 4.4,
                "Needs Met": 4.5,
                "Discuss Goals": 4.3,
                "Accessibility": 4.2,
                "Overall": 4.5
            },
            "recommendationPercentage": "88%",
            "summarizedComment": "Dr. Hsieh is an insightful and empathetic rheumatologist providing thoughtful advice."
        }
    },
    {
        "name": "Dr. Frank Tseng",
        "hospital": "Veterans General Hospital Taichung Branch",
        "city": "Taichung",
        "gender": "male",
        "specialty": "Oncology",
        "image": "https://randomuser.me/api/portraits/men/65.jpg",
        "rating": 4.9,
        "tags": ["Respected", "Supportive"],
        "reviewDetails": [
            {
                "topic": "A true hero",
                "comment": "曾醫師在腫瘤科領域備受尊敬，他不僅提供專業的治療，還給予病患和家屬很大的精神支持。是真正的英雄。"
            }
        ],
        "fullProfile": {
            "experience": "22 years",
            "reviewsCount": 70,
            "avgRatings": {
                "Explanation": 4.9,
                "Needs Met": 4.9,
                "Discuss Goals": 4.9,
                "Accessibility": 4.8,
                "Overall": 4.9
            },
            "recommendationPercentage": "99%",
            "summarizedComment": "Dr. Tseng is a highly respected and supportive oncologist, a true hero."
        }
    },
    {
        "name": "Dr. Wendy Lo",
        "hospital": "Chang Gung Memorial Hospital, Kaohsiung",
        "city": "Kaohsiung",
        "gender": "female",
        "specialty": "Psychiatry",
        "image": "https://randomuser.me/api/portraits/women/50.jpg",
        "rating": 4.7,
        "tags": ["Listening", "Non-judgmental"],
        "reviewDetails": [
            {
                "topic": "Very understanding",
                "comment": "羅醫師非常善於傾聽，她讓我感到被理解且不被批判。她的治療對我幫助很大。"
            }
        ],
        "fullProfile": {
            "experience": "10 years",
            "reviewsCount": 40,
            "avgRatings": {
                "Explanation": 4.7,
                "Needs Met": 4.7,
                "Discuss Goals": 4.6,
                "Accessibility": 4.5,
                "Overall": 4.7
            },
            "recommendationPercentage": "93%",
            "summarizedComment": "Dr. Lo is a very understanding psychiatrist who listens well and is non-judgmental."
        }
    },
    {
        "name": "Dr. Jason Su",
        "hospital": "Taipei Wanfang Hospital",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Nephrology",
        "image": "https://randomuser.me/api/portraits/men/2.jpg",
        "rating": 4.6,
        "tags": ["Detailed", "Caring"],
        "reviewDetails": [
            {
                "topic": "Excellent kidney specialist",
                "comment": "蘇醫師對腎臟疾病的了解非常深入，他總是能詳細解釋我的病情，並給予細心的照護。"
            }
        ],
        "fullProfile": {
            "experience": "15 years",
            "reviewsCount": 48,
            "avgRatings": {
                "Explanation": 4.6,
                "Needs Met": 4.7,
                "Discuss Goals": 4.6,
                "Accessibility": 4.5,
                "Overall": 4.6
            },
            "recommendationPercentage": "90%",
            "summarizedComment": "Dr. Su is an excellent kidney specialist providing detailed explanations and caring treatment."
        }
    },
    {
        "name": "Dr. Carol Fan",
        "hospital": "National Yang Ming Chiao Tung University Hospital",
        "city": "Hsinchu",
        "gender": "female",
        "specialty": "Allergy and Immunology",
        "image": "https://randomuser.me/api/portraits/women/90.jpg",
        "rating": 4.4,
        "tags": ["Analytical", "Effective"],
        "reviewDetails": [
            {
                "topic": "Solved my allergies",
                "comment": "范醫師分析過敏問題非常專業，她找到我過敏的根源並開出有效的治療方案，讓我擺脫了多年的困擾。"
            }
        ],
        "fullProfile": {
            "experience": "10 years",
            "reviewsCount": 32,
            "avgRatings": {
                "Explanation": 4.4,
                "Needs Met": 4.5,
                "Discuss Goals": 4.3,
                "Accessibility": 4.2,
                "Overall": 4.4
            },
            "recommendationPercentage": "86%",
            "summarizedComment": "Dr. Fan is an analytical and effective allergy specialist who solves complex issues."
        }
    },
    {
        "name": "Dr. Peter Chu",
        "hospital": "Chiayi Christian Hospital",
        "city": "Chiayi",
        "gender": "male",
        "specialty": "Anesthesiology",
        "image": "https://randomuser.me/api/portraits/men/15.jpg",
        "rating": 4.7,
        "tags": ["Reassuring", "Professional"],
        "reviewDetails": [
            {
                "topic": "Put me at ease",
                "comment": "朱醫師在手術前詳細解釋了麻醉過程，讓我感到非常安心。他的專業讓我對手術充滿信心。"
            }
        ],
        "fullProfile": {
            "experience": "12 years",
            "reviewsCount": 30,
            "avgRatings": {
                "Explanation": 4.7,
                "Needs Met": 4.7,
                "Discuss Goals": 4.6,
                "Accessibility": 4.5,
                "Overall": 4.7
            },
            "recommendationPercentage": "92%",
            "summarizedComment": "Dr. Chu is a reassuring and professional anesthesiologist who explains procedures well."
        }
    },
    {
        "name": "Dr. Lily Chen",
        "hospital": "Hsinchu Cathay General Hospital",
        "city": "Hsinchu",
        "gender": "female",
        "specialty": "Geriatrics",
        "image": "https://randomuser.me/api/portraits/women/25.jpg",
        "rating": 4.6,
        "tags": ["Compassionate", "Experienced"],
        "reviewDetails": [
            {
                "topic": "Caring for elderly",
                "comment": "陳醫師對老年病患非常有愛心和耐心，她經驗豐富，能很好地處理老年人的多重健康問題。"
            }
        ],
        "fullProfile": {
            "experience": "18 years",
            "reviewsCount": 50,
            "avgRatings": {
                "Explanation": 4.6,
                "Needs Met": 4.7,
                "Discuss Goals": 4.5,
                "Accessibility": 4.4,
                "Overall": 4.6
            },
            "recommendationPercentage": "90%",
            "summarizedComment": "Dr. Chen is a compassionate and experienced geriatrician providing excellent care for the elderly."
        }
    },
    {
        "name": "Dr. Alan Wu",
        "hospital": "Taipei Union Hospital",
        "city": "Taipei",
        "gender": "male",
        "specialty": "Plastic Surgery",
        "image": "https://randomuser.me/api/portraits/men/88.jpg",
        "rating": 4.8,
        "tags": ["Artistic", "Precise"],
        "reviewDetails": [
            {
                "topic": "Amazing results",
                "comment": "吳醫師的整形技術非常高超，他對細節的把控非常精確，術後效果超乎我的預期。我很滿意！"
            }
        ],
        "fullProfile": {
            "experience": "14 years",
            "reviewsCount": 45,
            "avgRatings": {
                "Explanation": 4.8,
                "Needs Met": 4.9,
                "Discuss Goals": 4.8,
                "Accessibility": 4.7,
                "Overall": 4.8
            },
            "recommendationPercentage": "95%",
            "summarizedComment": "Dr. Wu is an artistic and precise plastic surgeon delivering amazing results."
        }
    }
  ];