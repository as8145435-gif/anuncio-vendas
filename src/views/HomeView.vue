<template>
  <v-app>
    <!-- Header com logo e botões -->
    <v-app-bar elevation="0">
      <v-app-bar-title>
        <v-img
          :src="imgs.logo"
          max-height="40"
          max-width="40"
          contain
        ></v-img>
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn icon>
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <!-- Carrossel de imagens -->
        <v-row>
          <v-col>
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12">
            <v-carousel 
              hide-delimiters 
              height="300" 
              show-arrows="hover"
              @update:model-value="changeSlide"
            >
              <v-carousel-item
                v-for="(image, i) in imgs.carrossel"
                :key="i"
                :src="image"
                cover
              >
                <div class="watermark">{{ i + 1 }}/{{ imgs.carrossel.length }}</div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12 pb-0">
            <p class="text-caption text-grey">{{ anuncio.dataHora }}</p>
          </v-col>
        </v-row>

        <!-- Título -->
        <v-row>
          <v-col cols="12 py-0">
            <h2 class="text-h6">{{ anuncio.titulo }}</h2>
          </v-col>
        </v-row>

        <!-- Preços -->
        <v-row>
          <v-col cols="12">
            <p class="old-price mb-1">{{ anuncio.precoAntigo }}</p>
            <p class="text-h4 font-weight-bold text-black">{{ anuncio.precoAtual }}</p>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Descrição -->
        <v-row>
          <v-col cols="12">
            <p class="mb-2 text-h6">Descrição</p>
            <p class="text-body-2">{{ anuncio.descricao }}</p>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <!-- Localização -->
        <v-row>
          <v-col cols="12">
            <p class="text-h6 font-weight-bold mb-2">Localização</p>
            <v-row>
              <v-col cols="3">
                <v-img :src="imgs.localizacao"></v-img>
              </v-col>
              <v-col cols="9 d-flex align-center">
                <v-row>
                  <v-col cols="12 pb-0">
                    <span class="">{{ anuncio.localizacao.bairro }}</span>
                  </v-col>
                  <v-col cols="12 py-0">
                    <p class="text-caption text-grey">{{ anuncio.localizacao.cidade }} , {{ anuncio.localizacao.estado }} , {{ anuncio.localizacao.cep }}</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-divider class="my-4"></v-divider>

        <v-row>
          <v-col cols="12">
            <p class="text-h6 font-weight-bold mb-2">Sobre o anunciante</p>
          </v-col>
        </v-row>

        <!-- Sobre o anunciante -->
        <v-row class="d-flex justify-center">
          <v-col cols="12 px-1">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <div class="seller-info">
                        <v-avatar class="seller-avatar" size="60">
                          <v-img :src="anuncio.anunciante.avatar"></v-img>
                        </v-avatar>
                        <div>
                          <p class="text-caption text-grey mb-1">Professional</p>
                          <p class="text-body-1 font-weight-medium mb-1">{{ anuncio.anunciante.nome }}</p>
                          <p class="text-caption text-grey mb-1">{{ anuncio.anunciante.ultimoAcesso }}</p>
                        </div>
                      </div>
                      <v-row>
                        <v-col cols="12 text-grey text-caption pb-0">
                          <v-icon class="mr-1">mdi-calendar</v-icon>Na OLX desde {{anuncio.anunciante.membroDesde }}
                        </v-col>
                        <v-col cols="12 text-grey text-caption pt-0">
                          <v-icon class="mr-1">mdi-map-marker</v-icon>
                          {{ anuncio.anunciante.localizacao.bairro }} , {{ anuncio.anunciante.localizacao.estado }} , {{ anuncio.anunciante.localizacao.cep }}
                        </v-col>
                      </v-row>
                      <v-btn variant="outlined" color="grey-darken-1" rounded block class="mt-2">
                        Acessar perfil do anunciante
                      </v-btn>
                      <v-row>
                        <v-col cols="12">
                          <v-divider></v-divider>
                        </v-col>
                        <v-col cols="12">
                          Informações verificadas
                        </v-col>
                        <v-col cols="12 py-1">
                          <v-icon class="mx-1" color="success">mdi-check-circle</v-icon> E-mail
                        </v-col>
                        <v-col cols="12 py-1">
                          <v-icon class="mx-1" color="success">mdi-check-circle</v-icon> Telefone
                        </v-col>
                        <v-col cols="12 py-1">
                          <v-icon class="mx-1" color="success">mdi-check-circle</v-icon> Identidade
                        </v-col>
                        <v-col cols="12 py-1">
                          <v-icon class="mx-1" color="success">mdi-check-circle</v-icon> Facebook
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Espaço para o bottom fixo não cobrir conteúdo -->
        <div style="height: 80px;"></div>
      </v-container>
    </v-main>
    <v-card height="40"></v-card>
    <!-- Bottom fixo com botões de ação -->
    <div class="fixed-bottom">
      <v-container>
        <v-row class="py-2">
          <v-col cols="8">
            <v-btn color="orange" rounded class="text-white" size="large" block>
              <v-icon start>mdi-currency-usd</v-icon>
              Solicitar
            </v-btn>
          </v-col>
          <v-col cols="2 px-0" class="d-flex justify-center">
            <v-btn icon color="orange" variant="outlined">
              <v-icon >mdi-chat-outline</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="2 px-0" class="d-flex justify-center">
            <v-btn icon color="orange" variant="outlined">
              <v-icon >mdi-phone</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import { defineComponent, ref } from 'vue';
import imgs from '@/resources/urls_index.js';

export default defineComponent({
  name: 'HomeView',
  components: {},
  data: () => ({
    imgs: {...imgs},
    currentImage: 1,
    anuncio: {
      titulo: "Televisão Smart Samsung 32 Polegadas",
      dataHora: "23/08 às 11:48",
      precoAntigo: "R$ 800,00",
      precoAtual: "R$ 500,00",
      descricao: "Televisão Completa Com Todos Os Acessórios Pezinhos, Controle, Caixa e Garantia Pela Loja que Comprei de 4 meses",
      localizacao: {
        cidade: "São Paulo",
        estado: "SP",
        bairro: "Tatuapé",
        referencia: "Próximo ao metrô Consolação",
        cep:"03401000"
      },
      anunciante: {
        nome: "Vanderson Fernandes",
        membroDesde: "abril de 2018",
        ultimoAcesso:"Último acesso há 20 horas",
        avaliacao: "4.8 (42 avaliações)",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        localizacao: {
          cidade: "São Paulo",
          estado: "SP",
          bairro: "Tatuapé",
          referencia: "Próximo ao metrô Consolação",
          cep:"03401000"
        },
      }
    }
  }),
  methods: {
    changeSlide(index) {
      this.currentImage = index + 1;
    }
  }
});
</script>

<style scoped>
.watermark {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}
.old-price {
  text-decoration: line-through;
  color: #9e9e9e;
  font-size: 1rem;
}
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
.seller-info {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
.seller-avatar {
  margin-right: 16px;
}
</style>