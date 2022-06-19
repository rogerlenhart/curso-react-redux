import { QueryDocumentSnapshot, SnapshotOptions, collection, getDocs, deleteDoc, doc, setDoc, addDoc, getDoc } from 'firebase/firestore';
import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import db from "../config";

export default class ColecaoCliente implements ClienteRepositorio {
    
    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot , options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }
    
    async salvar(cliente: Cliente): Promise<Cliente> {
        console.log(cliente)
        if(cliente?.id) {
            const ref = doc(db, "clientes", cliente.id).withConverter(this.#conversor)
            await setDoc(ref, cliente);
            return cliente
        } else {
            const docRef = await addDoc(this.colecao(), cliente);
            const doc = await getDoc(docRef)
            return doc.data()
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        return await deleteDoc(doc(db, 'clientes', cliente.id))
    }

    async obterTodos(): Promise<Cliente[]> {
        const querySnapshot = await getDocs(this.colecao())
        return querySnapshot.docs.map(doc => doc.data()) ?? []
    }

    private colecao() {
        return collection(db, 'clientes').withConverter(this.#conversor)
    }
}