function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
        var suggestionText = '';

        document.getElementById('result').innerHTML = "Hasil BMI Anda: " + bmi;

        if (bmi < 18.5) {
            suggestionText = "Anda kekurangan berat badan. Disarankan untuk berkonsultasi dengan ahli gizi untuk meningkatkan berat badan secara sehat.";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            suggestionText = "Berat badan Anda normal. Pertahankan pola hidup sehat Anda!";
        } else if (bmi >= 25 && bmi <= 29.9) {
            suggestionText = "Anda memiliki berat badan berlebih. Disarankan untuk mulai memperhatikan asupan makanan dan berolahraga secara teratur.";
        } else if (bmi >= 30 && bmi <= 34.9) {
            suggestionText = "Anda berada dalam kategori Obesitas Kelas I. Sangat disarankan untuk berkonsultasi dengan ahli gizi dan memulai program penurunan berat badan.";
        } else if (bmi >= 35 && bmi <= 39.9) {
            suggestionText = "Anda berada dalam kategori Obesitas Kelas II. Segera konsultasikan dengan dokter atau ahli gizi untuk penanganan lebih lanjut.";
        } else if (bmi >= 40) {
            suggestionText = "Anda berada dalam kategori Obesitas Kelas III (Obesitas Morbid). Ini adalah kondisi yang sangat serius, segera dapatkan bantuan medis.";
        }

        document.getElementById('suggestion').innerHTML = "<h2>Saran Kesehatan</h2><p>" + suggestionText + "</p>";
    } else {
        document.getElementById('result').innerHTML = "Mohon masukkan nilai berat dan tinggi yang valid.";
    }
}

function resetForm() {
    document.getElementById('age').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('suggestion').innerHTML = '<h2>Saran Kesehatan</h2><p>Masukkan data Anda untuk mendapatkan saran kesehatan berdasarkan BMI Anda.</p>';
}
