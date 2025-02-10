<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="primary" dark>
      <span>Application Bar</span>
    </v-app-bar>

    <v-navigation-drawer app color="blue lighten-2">
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px; background-color: #f5f5f5"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              label="Número Ocorrência"
              v-model="numeroOcorrencia"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Nome" v-model="nome"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="CPF" v-model="cpf"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Nome da Mãe" v-model="nomeMae"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Natureza" v-model="natureza"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Unidade" v-model="unidade"></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="dataNascimento"
              label="Data de Nascimento"
              type="date"
              :rules="[dateRule]"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field label="Alcunha" v-model="alcunha"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn color="primary" @click="buscar">Buscar</v-btn>
          </v-col>
        </v-row>

        <v-row v-if="jsonResponseDevir">
          <v-col cols="12">
            <h2 class="devir-title">DEVIR</h2>
          </v-col>
        </v-row>
        <v-row v-if="jsonResponseDevir">
          <v-col cols="12">
            <div class="json-box">
              <pre>{{ jsonResponseDevir }}</pre>
            </div>
          </v-col>
        </v-row>

        <v-row v-if="jsonResponseBoOnline">
          <v-col cols="12">
            <h2 class="boonline-title">BO online</h2>
          </v-col>
        </v-row>
        <v-row v-if="jsonResponseBoOnline">
          <v-col cols="12">
            <div class="json-box">
              <pre>{{ jsonResponseBoOnline }}</pre>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      numeroOcorrencia: "",
      nome: "",
      cpf: "",
      nomeMae: "",
      natureza: "",
      unidade: "",
      dataNascimento: "",
      alcunha: "",
      jsonResponseDevir: null,
      jsonResponseBoOnline: null,
    };
  },
  computed: {
    dateRule() {
      return (v) => (v && !isNaN(Date.parse(v))) || "Data inválida";
    },
  },
  methods: {
    limparCpf(cpf) {
      return cpf.replace(/[^\d]/g, "");
    },

    formatarData(data) {
      const date = new Date(data);
      const dia = String(date.getDate()).padStart(2, "0");
      const mes = String(date.getMonth() + 1).padStart(2, "0");
      const ano = date.getFullYear();
      return `${ano}/${mes}/${dia}`;
    },

    async buscar() {
      try {
        const nomeFormatado = this.nome ? `&nome=${this.nome}` : "";
        const alcunhaFormatada = this.alcunha ? `&alcunha=${this.alcunha}` : "";
        const dataNascimentoFormatada = this.dataNascimento
          ? `&dataNascimento=${this.formatarData(this.dataNascimento)}`
          : "";
        const nomeMaeFormatado = this.nomeMae ? `&nomeMae=${this.nomeMae}` : "";
        const cpfFormatado = this.cpf ? `&cpf=${this.limparCpf(this.cpf)}` : "";

        const urlDevir = ""

        this.jsonResponseDevir = respostaDevir.data;

        const urlBoOnline = "";
        const respostaBoOnline = await axios.get(urlBoOnline);

        this.jsonResponseBoOnline = respostaBoOnline.data;
      } catch (erro) {
        console.error("Erro na requisição:", erro);
      }
    },
  },
};
</script>

<style scoped>
.v-main {
  background-color: #f5f5f5;
}

.v-app-bar {
  background-color: #1976d2;
}

.v-navigation-drawer {
  background-color: #42a5f5;
}

.devir-title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 20px;
}

.boonline-title {
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 20px;
}

.json-box {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-height: 300px;
  overflow-y: auto;
  white-space: pre-wrap;
}
</style>
