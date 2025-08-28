<template>
  <v-app>
    <!-- Header com logo e botões -->
    <v-app-bar elevation="0" color="purple">
      <v-app-bar-title>
        <v-btn variant="icon" icon="mdi-arrow-left"></v-btn>
        Compra Segura
      </v-app-bar-title>
      <template v-slot:append>
        <v-btn @click="$router.push({name:'home'})" icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            Compre com segurança e tenha a garantia do dinheiro de volta com a <span class="font-weight-bold text-purple">Compra Segura</span>
          </v-col>
          <v-col cols="12 px-0 py-0 d-flex justify-center align-center">
            <v-img :src="imgs.qrCode" height="350"></v-img>
          </v-col>
          <v-col cols="12">
            <v-btn @click="copiarQrCode" color="purple" prepend-icon="mdi-content-copy" height="40" block>Pix Copia e cola</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <v-snackbar v-model="show" color="success" :timeout="timeout">
    {{ message }}
    <template v-slot:actions>
      <v-btn variant="text" @click="show = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { defineComponent, ref } from 'vue';
import imgs from '@/resources/urls_index.js';

export default defineComponent({
  name: 'FinalizarCompraView',
  components: {},
  data: () => ({
    imgs: {...imgs},
    show: false,
    message: 'Qr code copiado com sucesso!',
    timeout: 3000,  
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
        nome: "Eduarda Conceição",
        cpf:"334.***.***-43",
        membroDesde: "abril de 2018",
        ultimoAcesso:"Último acesso há 20 horas",
        avaliacao: "4.8 (42 avaliações)",
        avatar: "https://scontent.fcgh5-2.fna.fbcdn.net/v/t39.30808-6/449720251_3450114265286818_6638124526618148732_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFZ50J4AMYU_ya8v63vnPDZvOiVS0EjzRu86JVLQSPNG5yH5LQvWIo2FOrWKw8SLKIoPogQd-DWydmQHRbaS_9k&_nc_ohc=od8tcwbavJYQ7kNvwG1fm4R&_nc_oc=AdkGhVpEjAChgDzRqHJ2tCxllHRxSAqTMMhftscImLky689GBFtOIupedgOLG9hcWNhnmbPoYjFI7GYOaCZelub0&_nc_zt=23&_nc_ht=scontent.fcgh5-2.fna&_nc_gid=pxBffjBhrfQvtMCVxbpQFA&oh=00_AfUZ0aqC6OGJS1PXr7rGltLnxqxb6dexC0pLvkV3hp-h_g&oe=68B44918",
        localizacao: {
          cidade: "Mato grosso",
          estado: "MT",
          bairro: "Tapurah",
          referencia: "Próximo ao metrô",
          cep:"78573000"
        },
      }
    }
  }),
  mounted(){
    document.title = 'Olx Vendas';
  },
  methods: {
    copiarQrCode(){
      navigator.clipboard.writeText('00020126820014br.gov.bcb.pix013679c61407-3a2b-402b-875b-c067618f4d140220OLX TV 32 Polegadas 5204000053039865406500.005802BR5924Fatima aparecida batista6006Brasil62290525202508262322XXCB9S3F8116K63040A4B')
      .then(() => {
        this.show = true;
      })
      .catch(err => {
        console.error("Erro ao copiar o texto: ", err);
      });
    },
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