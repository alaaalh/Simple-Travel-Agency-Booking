<template>
  <div class="card-container">
        <div class="section-header">
            <h2 class="section-title">Popular Destinations</h2>
            <p class="section-subtitle">Vacations to make your experience enjoyable in Indonesia!</p>
        </div>

        <div class="destinations-grid">
            <!-- Destination Card 1 -->
            <div class="destination-card"  v-for="item in items">
                <div class="card-image">
                    <img src="https://primefaces.org/cdn/primevue/images/usercard.png" alt="Flores Road Trip">
                </div>  
                <div class="card-content">
                    <h3 class="card-title">{{ item.title }}</h3>
                    <div class="card-footer">
                        <div class="duration">{{ item.subTitle }}</div>
                        <div class="price">{{ item.discription }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["items"]);
</script>

<style scoped >
.card-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.section-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1e3a8a;
    margin-bottom: 0.5rem;
}

.section-subtitle {
    color: #666;
    font-size: 0.95rem;
}

/* Grid Layout */
.destinations-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
}

/* Card Styles */
.destination-card {
  background-color: rgb(241, 244, 246);
  border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.destination-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-image {
    width: 90%;
    margin: 14px;
    height: 200px;
    overflow: hidden;
    position: relative;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.destination-card:hover .card-image img {
    transform: scale(1.05);
}

.card-content {
    padding: 1rem;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
}

.duration {
    color: #1e3a8a;
    font-weight: bold;
    font-size: 0.9rem;
}

.price {
    color: #f97316;
    font-weight: bold;
    font-size: 1.1rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .destinations-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .destinations-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .destinations-grid {
        grid-template-columns: 1fr;
    }
}
</style>
