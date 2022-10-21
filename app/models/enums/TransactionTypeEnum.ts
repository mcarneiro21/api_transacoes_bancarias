export enum TransactionTypeEnum {
    OPEN, //pendente
    PROCESSING, //em processamento
    AUTHORIZED, //autorizado
    REFUNDED, //devolveu
    REFUSED, //recusou
    QUEUE //fila
}