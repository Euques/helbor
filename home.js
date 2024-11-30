   <!-- Firebase Scripts -->
    <script type="module">
      import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js';
      import {
        getFirestore,
        collection,
        getDocs,
        onSnapshot,
      } from 'https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js';

      // Configuração Firebase
      const firebaseConfig = {
        apiKey: 'AIzaSyB8-03eq_8LCMfcxuY-Z4eCVWV32Ad4lfQ',
        authDomain: 'feira-265d4.firebaseapp.com',
        databaseURL: 'https://feira-265d4-default-rtdb.firebaseio.com',
        projectId: 'feira-265d4',
        storageBucket: 'feira-265d4.firebasestorage.app',
        messagingSenderId: '124883888377',
        appId: '1:124883888377:web:c4e8c834b313127f6a5a28',
        measurementId: 'G-2QFQD5NGXR',
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);

      // Função para carregar expositores e renderizar os cards
      async function loadExpositores() {
        const container = document.getElementById('expositoresContainer');
        try {
          const querySnapshot = await getDocs(collection(db, 'users'));
          if (querySnapshot.empty) {
            container.innerHTML =
              '<p class="text-center">Nenhum expositor cadastrado.</p>';
            return;
          }

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const uid = doc.id;

            // Criar o card do expositor
            const card = document.createElement('div');
            card.className = 'col-md-4 col-sm-6';

            card.innerHTML = `
              <div class="card shadow-sm">
                <div class="card-img-container">
                  <img
                    src="${data.imageURL || 'https://via.placeholder.com/300x200'}"
                    class="card-img-top"
                    alt="${data.name || 'Expositor'}"
                  />
                </div>
                ${
                  data.logoURL
                    ? `<div class="logo-overlay">
                        <img
                          src="${data.logoURL}"
                          alt="Logo de ${data.name || 'Expositor'}"
                        />
                      </div>`
                    : ''
                }
                <div class="card-body">
                  <h5 class="card-title">${data.name || 'Sem Nome'}</h5>
                  <p class="card-text">
                    ${data.description || 'Sem descrição disponível.'}
                  </p>
                  <span class="badge bg-secondary">${data.category || 'Sem categoria'}</span>
                </div>
                <div class="card-footer text-center">
                  <a href="exp/?ex=${uid}" class="btn btn-custom">Ver Mais</a>
                </div>
              </div>
            `;

            container.appendChild(card);
          });
        } catch (error) {
          console.error('Erro ao carregar expositores:', error);
          container.innerHTML =
            '<p class="text-danger text-center">Erro ao carregar os expositores.</p>';
        }
      }

      // Função para carregar os dados em tempo real
      function loadExpositoresRealTime() {
        const container = document.getElementById('expositoresContainer');
        onSnapshot(collection(db, 'users'), (querySnapshot) => {
          container.innerHTML = ''; // Limpar o conteúdo atual
          if (querySnapshot.empty) {
            container.innerHTML =
              '<p class="text-center">Nenhum expositor cadastrado.</p>';
            return;
          }

          querySnapshot.forEach((doc) => {
            const data = doc.data();
            const uid = doc.id;

            // Criar o card do expositor
            const card = document.createElement('div');
            card.className = 'col-md-4 col-sm-6';

            card.innerHTML = `
              <div class="card shadow-sm">
                <div class="card-img-container">
                  <img
                    src="${data.imageURL || 'https://via.placeholder.com/300x200'}"
                    class="card-img-top"
                    alt="${data.name || 'Expositor'}"
                  />
                </div>
                ${
                  data.logoURL
                    ? `<div class="logo-overlay">
                        <img
                          src="${data.logoURL}"
                          alt="Logo de ${data.name || 'Expositor'}"
                        />
                      </div>`
                    : ''
                }
                <div class="card-body">
                  <h5 class="card-title">${data.name || 'Sem Nome'}</h5>
                  <p class="card-text">
                    ${data.description || 'Sem descrição disponível.'}
                  </p>
                  <span class="badge bg-secondary">${data.category || 'Sem categoria'}</span>
                </div>
                <div class="card-footer text-center">
                  <a href="exp/?ex=${uid}" class="btn btn-custom">Ver Mais</a>
                </div>
              </div>
            `;

            container.appendChild(card);
          });
        });
      }

      // Inicializar as funções
      loadExpositoresRealTime();
    </script>

    <!-- Bootstrap JS -->
    <script
      src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"
    ></script>
