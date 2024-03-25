import mongoose from 'mongoose';

const conexao = await mongoose.connect('mongodb://anegarcia:30A*bril2007@ac-gohrs9s-shard-00-00.3bdsvfk.mongodb.net:27017,ac-gohrs9s-shard-00-01.3bdsvfk.mongodb.net:27017,ac-gohrs9s-shard-00-02.3bdsvfk.mongodb.net:27017/?ssl=true&replicaSet=atlas-n6bpe8-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')

export default conexao