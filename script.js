// script.js
// 不再需要在這裡定義 doctorsData，因為它從 data.js 載入

document.addEventListener('DOMContentLoaded', () => {
    const doctorListContainer = document.getElementById('doctorList');
    const showMoreBtn = document.getElementById('show-more-btn');
    const specialtyInput = document.getElementById('specialtyInput');
    const cityInput = document.getElementById('cityInput');
    const genderSelect = document.getElementById('genderSelect');
    const searchBtn = document.getElementById('searchBtn');
  
    // 不再需要 modal 相關的元素引用和函數
  
    const initialDisplayCount = 5;
    const loadMoreCount = 5;
    let currentFilter = {};
    let displayedDoctors = [];
    let currentDoctorsPageIndex = 0;
  
    // Create Doctor Card HTML Structure
    function createDoctorCard(doc) {
        const card = document.createElement("div");
        card.className = "doctor-card";
        // 不再需要 dataset.doctorName，因為我們要跳轉
        // card.dataset.doctorName = doc.name;
  
        const img = `<img src="${doc.image}" alt="${doc.name}">`;
  
        const tagsHTML = doc.tags.map(tag => `<span>${tag}</span>`).join('');
  
        const previewText = doc.reviewDetails[0].comment.length > 100
            ? doc.reviewDetails[0].comment.slice(0, 100) + '...'
            : doc.reviewDetails[0].comment;
  
        const info = `
            <div class="doctor-info">
                <h3>${doc.name}</h3>
                <p><span class="specialty">${doc.specialty}</span></p>
                <p>${doc.hospital}</p>
                <p>${doc.city}</p>
                <p class="rating">評價: ${doc.rating} ⭐</p>
                <div class="tags">${tagsHTML}</div>
                <div class="review">
                    <strong>${doc.reviewDetails[0].topic}</strong>: ${previewText}
                </div>
                ${doc.reviewDetails[0].comment.length > 100 ? '<button class="expand-btn">Read more</button>' : ''}
            </div>
        `;
  
        card.innerHTML = img + info;
  
        // 如果有 Read More 按鈕，添加事件監聽器 (阻止事件冒泡)
        const button = card.querySelector(".expand-btn");
        if (button) {
            let expanded = false;
            button.addEventListener("click", (event) => {
                event.stopPropagation(); // 阻止事件冒泡，避免觸發卡片點擊事件
                expanded = !expanded;
                const reviewDiv = card.querySelector(".review");
                if (expanded) {
                    reviewDiv.innerHTML = doc.reviewDetails.map(r => `<strong>${r.topic}</strong>: ${r.comment}`).join('<br>');
                    button.textContent = "Read less";
                } else {
                    reviewDiv.innerHTML = `<strong>${doc.reviewDetails[0].topic}</strong>: ${previewText}`;
                    button.textContent = "Read more";
                }
            });
        }
  
        // 添加點擊事件監聽器到整個卡片，進行頁面跳轉
        card.addEventListener('click', () => {
            // 將醫師姓名作為 URL 參數傳遞
            window.location.href = `doctor profile/profile.html?name=${encodeURIComponent(doc.name)}`;
        });
  
        return card;
    }
  
    // Render Doctor List
    function renderDoctors(startIndex, endIndex) {
        const doctorsToRender = displayedDoctors.slice(startIndex, endIndex);
  
        doctorsToRender.forEach(doctor => {
            doctorListContainer.appendChild(createDoctorCard(doctor));
        });
  
        updateShowMoreButton();
    }
  
    // Update "Show More" button status
    function updateShowMoreButton() {
        if (currentDoctorsPageIndex * loadMoreCount >= displayedDoctors.length) {
            showMoreBtn.style.display = 'none';
        } else {
            showMoreBtn.style.display = 'block';
        }
    }
  
    // Apply Filters and Re-render the entire list
    function applyFiltersAndRender() {
        const gender = genderSelect.value;
        const city = cityInput.value.trim();
        const specialty = specialtyInput.value.trim();
  
        currentFilter = { gender, city, specialty };
  
        displayedDoctors = doctorsData.filter(doc => {
            const matchesGender = currentFilter.gender === "all" || currentFilter.gender === doc.gender;
            const matchesCity = !currentFilter.city || doc.city.toLowerCase().includes(currentFilter.city.toLowerCase());
            const matchesSpecialty = !currentFilter.specialty || doc.specialty.toLowerCase().includes(currentFilter.specialty.toLowerCase());
            return matchesGender && matchesCity && matchesSpecialty;
        });
  
        doctorListContainer.innerHTML = '';
        currentDoctorsPageIndex = 0;
  
        if (displayedDoctors.length === 0) {
            doctorListContainer.innerHTML = '<p style="text-align: center; color: #555;">No doctors found matching your criteria.</p>';
            showMoreBtn.style.display = 'none';
        } else {
            renderDoctors(0, initialDisplayCount);
            currentDoctorsPageIndex = 1;
        }
    }
  
    // Handle "Show More" button click event
    showMoreBtn.addEventListener('click', () => {
        const startIndex = currentDoctorsPageIndex * loadMoreCount;
        const endIndex = startIndex + loadMoreCount;
        renderDoctors(startIndex, endIndex);
        currentDoctorsPageIndex++;
    });
  
    // Handle search button click event
    searchBtn.addEventListener('click', applyFiltersAndRender);
  
    // Initial load
    applyFiltersAndRender();
  });