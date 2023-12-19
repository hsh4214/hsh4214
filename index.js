function showProductDetails(name, material, trees, price, imagePath) {
    // 가격과 구매확정 버튼 초기화
    document.getElementById('purchaseProductName').innerText = '';
    document.getElementById('purchaseProductPrice').innerText = '';
    document.getElementById('purchasePage').style.display = 'none';

    document.getElementById('productName').innerText = name;
    document.getElementById('productMaterial').innerText = '소재: ' + material;
    document.getElementById('treesSaved').innerText = '살릴 수 있는 나무의 수: ' + trees + ' 그루';
    document.getElementById('productDetails').style.display = 'flex';

    // 제품 이미지를 표시하세요
    document.getElementById('productImage').src = imagePath;

    // 가격을 데이터 속성에 저장하세요
    document.getElementById('purchasePage').setAttribute('data-price', price);
}

function showPurchasePage() {
    const productName = document.getElementById('productName').innerText;
    const productPrice = parseFloat(document.getElementById('purchasePage').getAttribute('data-price'));

    document.getElementById('purchaseProductName').innerText = productName;
    document.getElementById('purchaseProductPrice').innerText = '가격: ' + productPrice + '원';
    document.getElementById('purchaseImage').src = document.getElementById('productImage').src; // 이미지 복사
    document.getElementById('purchasePage').style.display = 'flex';
}

function confirmPurchase() {
    const treesSaved = document.getElementById('treesSaved').innerText.split(' ')[5];
    document.getElementById('confirmationPage').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 스크롤 방지
    alert(`당신은 나무를 ${treesSaved} 그루를 살렸습니다!`);
}

function closeAllWindows() {
    document.getElementById('confirmationPage').style.display = 'none';
    document.getElementById('productDetails').style.display = 'none';
    document.getElementById('purchasePage').style.display = 'none';
    window.close(); // 현재 창도 닫음
}
