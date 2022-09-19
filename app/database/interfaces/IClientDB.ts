interface IClientDB {
    connect: () => boolean;
    end: () => boolean;
}