import { IAlbumUserRepository } from 'src/interfaces/album-user.interface';
import { IAlbumRepository } from 'src/interfaces/album.interface';
import { IAssetRepository } from 'src/interfaces/asset.interface';
import { ICronRepository } from 'src/interfaces/cron.interface';
import { ICryptoRepository } from 'src/interfaces/crypto.interface';
import { IDatabaseRepository } from 'src/interfaces/database.interface';
import { IEventRepository } from 'src/interfaces/event.interface';
import { IJobRepository } from 'src/interfaces/job.interface';
import { ILibraryRepository } from 'src/interfaces/library.interface';
import { ILoggerRepository } from 'src/interfaces/logger.interface';
import { IMachineLearningRepository } from 'src/interfaces/machine-learning.interface';
import { IMapRepository } from 'src/interfaces/map.interface';
import { IMediaRepository } from 'src/interfaces/media.interface';
import { IMemoryRepository } from 'src/interfaces/memory.interface';
import { IMetadataRepository } from 'src/interfaces/metadata.interface';
import { IMoveRepository } from 'src/interfaces/move.interface';
import { INotificationRepository } from 'src/interfaces/notification.interface';
import { IOAuthRepository } from 'src/interfaces/oauth.interface';
import { IPartnerRepository } from 'src/interfaces/partner.interface';
import { IPersonRepository } from 'src/interfaces/person.interface';
import { IProcessRepository } from 'src/interfaces/process.interface';
import { ISearchRepository } from 'src/interfaces/search.interface';
import { IServerInfoRepository } from 'src/interfaces/server-info.interface';
import { ISessionRepository } from 'src/interfaces/session.interface';
import { ISharedLinkRepository } from 'src/interfaces/shared-link.interface';
import { IStackRepository } from 'src/interfaces/stack.interface';
import { IStorageRepository } from 'src/interfaces/storage.interface';
import { ISystemMetadataRepository } from 'src/interfaces/system-metadata.interface';
import { ITagRepository } from 'src/interfaces/tag.interface';
import { ITelemetryRepository } from 'src/interfaces/telemetry.interface';
import { ITrashRepository } from 'src/interfaces/trash.interface';
import { IUserRepository } from 'src/interfaces/user.interface';
import { IVersionHistoryRepository } from 'src/interfaces/version-history.interface';
import { AccessRepository } from 'src/repositories/access.repository';
import { ActivityRepository } from 'src/repositories/activity.repository';
import { AlbumUserRepository } from 'src/repositories/album-user.repository';
import { AlbumRepository } from 'src/repositories/album.repository';
import { ApiKeyRepository } from 'src/repositories/api-key.repository';
import { AssetRepository } from 'src/repositories/asset.repository';
import { AuditRepository } from 'src/repositories/audit.repository';
import { ConfigRepository } from 'src/repositories/config.repository';
import { CronRepository } from 'src/repositories/cron.repository';
import { CryptoRepository } from 'src/repositories/crypto.repository';
import { DatabaseRepository } from 'src/repositories/database.repository';
import { EventRepository } from 'src/repositories/event.repository';
import { JobRepository } from 'src/repositories/job.repository';
import { LibraryRepository } from 'src/repositories/library.repository';
import { LoggerRepository } from 'src/repositories/logger.repository';
import { MachineLearningRepository } from 'src/repositories/machine-learning.repository';
import { MapRepository } from 'src/repositories/map.repository';
import { MediaRepository } from 'src/repositories/media.repository';
import { MemoryRepository } from 'src/repositories/memory.repository';
import { MetadataRepository } from 'src/repositories/metadata.repository';
import { MoveRepository } from 'src/repositories/move.repository';
import { NotificationRepository } from 'src/repositories/notification.repository';
import { OAuthRepository } from 'src/repositories/oauth.repository';
import { PartnerRepository } from 'src/repositories/partner.repository';
import { PersonRepository } from 'src/repositories/person.repository';
import { ProcessRepository } from 'src/repositories/process.repository';
import { SearchRepository } from 'src/repositories/search.repository';
import { ServerInfoRepository } from 'src/repositories/server-info.repository';
import { SessionRepository } from 'src/repositories/session.repository';
import { SharedLinkRepository } from 'src/repositories/shared-link.repository';
import { StackRepository } from 'src/repositories/stack.repository';
import { StorageRepository } from 'src/repositories/storage.repository';
import { SystemMetadataRepository } from 'src/repositories/system-metadata.repository';
import { TagRepository } from 'src/repositories/tag.repository';
import { TelemetryRepository } from 'src/repositories/telemetry.repository';
import { TrashRepository } from 'src/repositories/trash.repository';
import { UserRepository } from 'src/repositories/user.repository';
import { VersionHistoryRepository } from 'src/repositories/version-history.repository';
import { ViewRepository } from 'src/repositories/view-repository';

export const repositories = [
  //
  AccessRepository,
  ActivityRepository,
  AuditRepository,
  ApiKeyRepository,
  ConfigRepository,
  ViewRepository,
];

export const providers = [
  { provide: IAlbumRepository, useClass: AlbumRepository },
  { provide: IAlbumUserRepository, useClass: AlbumUserRepository },
  { provide: IAssetRepository, useClass: AssetRepository },
  { provide: ICronRepository, useClass: CronRepository },
  { provide: ICryptoRepository, useClass: CryptoRepository },
  { provide: IDatabaseRepository, useClass: DatabaseRepository },
  { provide: IEventRepository, useClass: EventRepository },
  { provide: IJobRepository, useClass: JobRepository },
  { provide: ILibraryRepository, useClass: LibraryRepository },
  { provide: ILoggerRepository, useClass: LoggerRepository },
  { provide: IMachineLearningRepository, useClass: MachineLearningRepository },
  { provide: IMapRepository, useClass: MapRepository },
  { provide: IMediaRepository, useClass: MediaRepository },
  { provide: IMemoryRepository, useClass: MemoryRepository },
  { provide: IMetadataRepository, useClass: MetadataRepository },
  { provide: IMoveRepository, useClass: MoveRepository },
  { provide: INotificationRepository, useClass: NotificationRepository },
  { provide: IOAuthRepository, useClass: OAuthRepository },
  { provide: IPartnerRepository, useClass: PartnerRepository },
  { provide: IPersonRepository, useClass: PersonRepository },
  { provide: IProcessRepository, useClass: ProcessRepository },
  { provide: ISearchRepository, useClass: SearchRepository },
  { provide: IServerInfoRepository, useClass: ServerInfoRepository },
  { provide: ISessionRepository, useClass: SessionRepository },
  { provide: ISharedLinkRepository, useClass: SharedLinkRepository },
  { provide: IStackRepository, useClass: StackRepository },
  { provide: IStorageRepository, useClass: StorageRepository },
  { provide: ISystemMetadataRepository, useClass: SystemMetadataRepository },
  { provide: ITagRepository, useClass: TagRepository },
  { provide: ITelemetryRepository, useClass: TelemetryRepository },
  { provide: ITrashRepository, useClass: TrashRepository },
  { provide: IUserRepository, useClass: UserRepository },
  { provide: IVersionHistoryRepository, useClass: VersionHistoryRepository },
];
