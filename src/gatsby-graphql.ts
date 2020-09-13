export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ConnectorSpec = {
  name: Scalars['String'];
  count: Scalars['Int'];
};

export type ConnectorSpecFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<IntQueryOperatorInput>;
};

export type ConnectorSpecFilterListInput = {
  elemMatch?: Maybe<ConnectorSpecFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Designer = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
  fullSVG?: Maybe<File>;
  series?: Maybe<Array<Maybe<Series>>>;
  models?: Maybe<Array<Maybe<Models>>>;
};

export type DesignerConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DesignerEdge>;
  nodes: Array<Designer>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DesignerGroupConnection>;
};


export type DesignerConnectionDistinctArgs = {
  field: DesignerFieldsEnum;
};


export type DesignerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DesignerFieldsEnum;
};

export type DesignerEdge = {
  next?: Maybe<Designer>;
  node: Designer;
  previous?: Maybe<Designer>;
};

export type DesignerFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'website'
  | 'fullSVG___sourceInstanceName'
  | 'fullSVG___absolutePath'
  | 'fullSVG___relativePath'
  | 'fullSVG___extension'
  | 'fullSVG___size'
  | 'fullSVG___prettySize'
  | 'fullSVG___modifiedTime'
  | 'fullSVG___accessTime'
  | 'fullSVG___changeTime'
  | 'fullSVG___birthTime'
  | 'fullSVG___root'
  | 'fullSVG___dir'
  | 'fullSVG___base'
  | 'fullSVG___ext'
  | 'fullSVG___name'
  | 'fullSVG___relativeDirectory'
  | 'fullSVG___dev'
  | 'fullSVG___mode'
  | 'fullSVG___nlink'
  | 'fullSVG___uid'
  | 'fullSVG___gid'
  | 'fullSVG___rdev'
  | 'fullSVG___ino'
  | 'fullSVG___atimeMs'
  | 'fullSVG___mtimeMs'
  | 'fullSVG___ctimeMs'
  | 'fullSVG___atime'
  | 'fullSVG___mtime'
  | 'fullSVG___ctime'
  | 'fullSVG___birthtime'
  | 'fullSVG___birthtimeMs'
  | 'fullSVG___blksize'
  | 'fullSVG___blocks'
  | 'fullSVG___publicURL'
  | 'fullSVG___childImageSharp___fixed___base64'
  | 'fullSVG___childImageSharp___fixed___tracedSVG'
  | 'fullSVG___childImageSharp___fixed___aspectRatio'
  | 'fullSVG___childImageSharp___fixed___width'
  | 'fullSVG___childImageSharp___fixed___height'
  | 'fullSVG___childImageSharp___fixed___src'
  | 'fullSVG___childImageSharp___fixed___srcSet'
  | 'fullSVG___childImageSharp___fixed___srcWebp'
  | 'fullSVG___childImageSharp___fixed___srcSetWebp'
  | 'fullSVG___childImageSharp___fixed___originalName'
  | 'fullSVG___childImageSharp___resolutions___base64'
  | 'fullSVG___childImageSharp___resolutions___tracedSVG'
  | 'fullSVG___childImageSharp___resolutions___aspectRatio'
  | 'fullSVG___childImageSharp___resolutions___width'
  | 'fullSVG___childImageSharp___resolutions___height'
  | 'fullSVG___childImageSharp___resolutions___src'
  | 'fullSVG___childImageSharp___resolutions___srcSet'
  | 'fullSVG___childImageSharp___resolutions___srcWebp'
  | 'fullSVG___childImageSharp___resolutions___srcSetWebp'
  | 'fullSVG___childImageSharp___resolutions___originalName'
  | 'fullSVG___childImageSharp___fluid___base64'
  | 'fullSVG___childImageSharp___fluid___tracedSVG'
  | 'fullSVG___childImageSharp___fluid___aspectRatio'
  | 'fullSVG___childImageSharp___fluid___src'
  | 'fullSVG___childImageSharp___fluid___srcSet'
  | 'fullSVG___childImageSharp___fluid___srcWebp'
  | 'fullSVG___childImageSharp___fluid___srcSetWebp'
  | 'fullSVG___childImageSharp___fluid___sizes'
  | 'fullSVG___childImageSharp___fluid___originalImg'
  | 'fullSVG___childImageSharp___fluid___originalName'
  | 'fullSVG___childImageSharp___fluid___presentationWidth'
  | 'fullSVG___childImageSharp___fluid___presentationHeight'
  | 'fullSVG___childImageSharp___sizes___base64'
  | 'fullSVG___childImageSharp___sizes___tracedSVG'
  | 'fullSVG___childImageSharp___sizes___aspectRatio'
  | 'fullSVG___childImageSharp___sizes___src'
  | 'fullSVG___childImageSharp___sizes___srcSet'
  | 'fullSVG___childImageSharp___sizes___srcWebp'
  | 'fullSVG___childImageSharp___sizes___srcSetWebp'
  | 'fullSVG___childImageSharp___sizes___sizes'
  | 'fullSVG___childImageSharp___sizes___originalImg'
  | 'fullSVG___childImageSharp___sizes___originalName'
  | 'fullSVG___childImageSharp___sizes___presentationWidth'
  | 'fullSVG___childImageSharp___sizes___presentationHeight'
  | 'fullSVG___childImageSharp___original___width'
  | 'fullSVG___childImageSharp___original___height'
  | 'fullSVG___childImageSharp___original___src'
  | 'fullSVG___childImageSharp___resize___src'
  | 'fullSVG___childImageSharp___resize___tracedSVG'
  | 'fullSVG___childImageSharp___resize___width'
  | 'fullSVG___childImageSharp___resize___height'
  | 'fullSVG___childImageSharp___resize___aspectRatio'
  | 'fullSVG___childImageSharp___resize___originalName'
  | 'fullSVG___childImageSharp___id'
  | 'fullSVG___childImageSharp___parent___id'
  | 'fullSVG___childImageSharp___parent___children'
  | 'fullSVG___childImageSharp___children'
  | 'fullSVG___childImageSharp___children___id'
  | 'fullSVG___childImageSharp___children___children'
  | 'fullSVG___childImageSharp___internal___content'
  | 'fullSVG___childImageSharp___internal___contentDigest'
  | 'fullSVG___childImageSharp___internal___description'
  | 'fullSVG___childImageSharp___internal___fieldOwners'
  | 'fullSVG___childImageSharp___internal___ignoreType'
  | 'fullSVG___childImageSharp___internal___mediaType'
  | 'fullSVG___childImageSharp___internal___owner'
  | 'fullSVG___childImageSharp___internal___type'
  | 'fullSVG___id'
  | 'fullSVG___parent___id'
  | 'fullSVG___parent___parent___id'
  | 'fullSVG___parent___parent___children'
  | 'fullSVG___parent___children'
  | 'fullSVG___parent___children___id'
  | 'fullSVG___parent___children___children'
  | 'fullSVG___parent___internal___content'
  | 'fullSVG___parent___internal___contentDigest'
  | 'fullSVG___parent___internal___description'
  | 'fullSVG___parent___internal___fieldOwners'
  | 'fullSVG___parent___internal___ignoreType'
  | 'fullSVG___parent___internal___mediaType'
  | 'fullSVG___parent___internal___owner'
  | 'fullSVG___parent___internal___type'
  | 'fullSVG___children'
  | 'fullSVG___children___id'
  | 'fullSVG___children___parent___id'
  | 'fullSVG___children___parent___children'
  | 'fullSVG___children___children'
  | 'fullSVG___children___children___id'
  | 'fullSVG___children___children___children'
  | 'fullSVG___children___internal___content'
  | 'fullSVG___children___internal___contentDigest'
  | 'fullSVG___children___internal___description'
  | 'fullSVG___children___internal___fieldOwners'
  | 'fullSVG___children___internal___ignoreType'
  | 'fullSVG___children___internal___mediaType'
  | 'fullSVG___children___internal___owner'
  | 'fullSVG___children___internal___type'
  | 'fullSVG___internal___content'
  | 'fullSVG___internal___contentDigest'
  | 'fullSVG___internal___description'
  | 'fullSVG___internal___fieldOwners'
  | 'fullSVG___internal___ignoreType'
  | 'fullSVG___internal___mediaType'
  | 'fullSVG___internal___owner'
  | 'fullSVG___internal___type'
  | 'fullSVG___childDesigner___id'
  | 'fullSVG___childDesigner___parent___id'
  | 'fullSVG___childDesigner___parent___children'
  | 'fullSVG___childDesigner___children'
  | 'fullSVG___childDesigner___children___id'
  | 'fullSVG___childDesigner___children___children'
  | 'fullSVG___childDesigner___internal___content'
  | 'fullSVG___childDesigner___internal___contentDigest'
  | 'fullSVG___childDesigner___internal___description'
  | 'fullSVG___childDesigner___internal___fieldOwners'
  | 'fullSVG___childDesigner___internal___ignoreType'
  | 'fullSVG___childDesigner___internal___mediaType'
  | 'fullSVG___childDesigner___internal___owner'
  | 'fullSVG___childDesigner___internal___type'
  | 'fullSVG___childDesigner___name'
  | 'fullSVG___childDesigner___website'
  | 'fullSVG___childDesigner___fullSVG___sourceInstanceName'
  | 'fullSVG___childDesigner___fullSVG___absolutePath'
  | 'fullSVG___childDesigner___fullSVG___relativePath'
  | 'fullSVG___childDesigner___fullSVG___extension'
  | 'fullSVG___childDesigner___fullSVG___size'
  | 'fullSVG___childDesigner___fullSVG___prettySize'
  | 'fullSVG___childDesigner___fullSVG___modifiedTime'
  | 'fullSVG___childDesigner___fullSVG___accessTime'
  | 'fullSVG___childDesigner___fullSVG___changeTime'
  | 'fullSVG___childDesigner___fullSVG___birthTime'
  | 'fullSVG___childDesigner___fullSVG___root'
  | 'fullSVG___childDesigner___fullSVG___dir'
  | 'fullSVG___childDesigner___fullSVG___base'
  | 'fullSVG___childDesigner___fullSVG___ext'
  | 'fullSVG___childDesigner___fullSVG___name'
  | 'fullSVG___childDesigner___fullSVG___relativeDirectory'
  | 'fullSVG___childDesigner___fullSVG___dev'
  | 'fullSVG___childDesigner___fullSVG___mode'
  | 'fullSVG___childDesigner___fullSVG___nlink'
  | 'fullSVG___childDesigner___fullSVG___uid'
  | 'fullSVG___childDesigner___fullSVG___gid'
  | 'fullSVG___childDesigner___fullSVG___rdev'
  | 'fullSVG___childDesigner___fullSVG___ino'
  | 'fullSVG___childDesigner___fullSVG___atimeMs'
  | 'fullSVG___childDesigner___fullSVG___mtimeMs'
  | 'fullSVG___childDesigner___fullSVG___ctimeMs'
  | 'fullSVG___childDesigner___fullSVG___atime'
  | 'fullSVG___childDesigner___fullSVG___mtime'
  | 'fullSVG___childDesigner___fullSVG___ctime'
  | 'fullSVG___childDesigner___fullSVG___birthtime'
  | 'fullSVG___childDesigner___fullSVG___birthtimeMs'
  | 'fullSVG___childDesigner___fullSVG___blksize'
  | 'fullSVG___childDesigner___fullSVG___blocks'
  | 'fullSVG___childDesigner___fullSVG___publicURL'
  | 'fullSVG___childDesigner___fullSVG___id'
  | 'fullSVG___childDesigner___fullSVG___children'
  | 'fullSVG___childDesigner___series'
  | 'fullSVG___childDesigner___series___id'
  | 'fullSVG___childDesigner___series___children'
  | 'fullSVG___childDesigner___series___name'
  | 'fullSVG___childDesigner___series___architecture'
  | 'fullSVG___childDesigner___series___releaseDate'
  | 'fullSVG___childDesigner___series___models'
  | 'fullSVG___childDesigner___series___website'
  | 'fullSVG___childDesigner___models'
  | 'fullSVG___childDesigner___models___name'
  | 'fullSVG___childDesigner___models___releaseDate'
  | 'fullSVG___childDesigner___models___monitorCount'
  | 'fullSVG___childDesigner___models___connectors'
  | 'fullSVG___childDesigner___models___HDCP'
  | 'fullSVG___childDesigner___models___id'
  | 'fullSVG___childDesigner___models___children'
  | 'fullSVG___childSeries___id'
  | 'fullSVG___childSeries___parent___id'
  | 'fullSVG___childSeries___parent___children'
  | 'fullSVG___childSeries___children'
  | 'fullSVG___childSeries___children___id'
  | 'fullSVG___childSeries___children___children'
  | 'fullSVG___childSeries___internal___content'
  | 'fullSVG___childSeries___internal___contentDigest'
  | 'fullSVG___childSeries___internal___description'
  | 'fullSVG___childSeries___internal___fieldOwners'
  | 'fullSVG___childSeries___internal___ignoreType'
  | 'fullSVG___childSeries___internal___mediaType'
  | 'fullSVG___childSeries___internal___owner'
  | 'fullSVG___childSeries___internal___type'
  | 'fullSVG___childSeries___name'
  | 'fullSVG___childSeries___architecture'
  | 'fullSVG___childSeries___releaseDate'
  | 'fullSVG___childSeries___models'
  | 'fullSVG___childSeries___models___name'
  | 'fullSVG___childSeries___models___releaseDate'
  | 'fullSVG___childSeries___models___monitorCount'
  | 'fullSVG___childSeries___models___connectors'
  | 'fullSVG___childSeries___models___HDCP'
  | 'fullSVG___childSeries___models___id'
  | 'fullSVG___childSeries___models___children'
  | 'fullSVG___childSeries___designer___id'
  | 'fullSVG___childSeries___designer___children'
  | 'fullSVG___childSeries___designer___name'
  | 'fullSVG___childSeries___designer___website'
  | 'fullSVG___childSeries___designer___series'
  | 'fullSVG___childSeries___designer___models'
  | 'fullSVG___childSeries___website'
  | 'fullSVG___childSeries___fields___designer'
  | 'fullSVG___childModels___series___id'
  | 'fullSVG___childModels___series___children'
  | 'fullSVG___childModels___series___name'
  | 'fullSVG___childModels___series___architecture'
  | 'fullSVG___childModels___series___releaseDate'
  | 'fullSVG___childModels___series___models'
  | 'fullSVG___childModels___series___website'
  | 'fullSVG___childModels___name'
  | 'fullSVG___childModels___releaseDate'
  | 'fullSVG___childModels___gpuEngine___nvidiaCUDACores'
  | 'fullSVG___childModels___gpuEngine___boostClockGhz'
  | 'fullSVG___childModels___memory___standardConfigSizeGB'
  | 'fullSVG___childModels___memory___standardConfigSpec'
  | 'fullSVG___childModels___memory___interfaceBandwidthBit'
  | 'fullSVG___childModels___display___monitorCount'
  | 'fullSVG___childModels___monitorCount'
  | 'fullSVG___childModels___connectors'
  | 'fullSVG___childModels___connectors___name'
  | 'fullSVG___childModels___connectors___count'
  | 'fullSVG___childModels___HDCP'
  | 'fullSVG___childModels___fields___slug'
  | 'fullSVG___childModels___fields___designer'
  | 'fullSVG___childModels___id'
  | 'fullSVG___childModels___parent___id'
  | 'fullSVG___childModels___parent___children'
  | 'fullSVG___childModels___children'
  | 'fullSVG___childModels___children___id'
  | 'fullSVG___childModels___children___children'
  | 'fullSVG___childModels___internal___content'
  | 'fullSVG___childModels___internal___contentDigest'
  | 'fullSVG___childModels___internal___description'
  | 'fullSVG___childModels___internal___fieldOwners'
  | 'fullSVG___childModels___internal___ignoreType'
  | 'fullSVG___childModels___internal___mediaType'
  | 'fullSVG___childModels___internal___owner'
  | 'fullSVG___childModels___internal___type'
  | 'series'
  | 'series___id'
  | 'series___parent___id'
  | 'series___parent___parent___id'
  | 'series___parent___parent___children'
  | 'series___parent___children'
  | 'series___parent___children___id'
  | 'series___parent___children___children'
  | 'series___parent___internal___content'
  | 'series___parent___internal___contentDigest'
  | 'series___parent___internal___description'
  | 'series___parent___internal___fieldOwners'
  | 'series___parent___internal___ignoreType'
  | 'series___parent___internal___mediaType'
  | 'series___parent___internal___owner'
  | 'series___parent___internal___type'
  | 'series___children'
  | 'series___children___id'
  | 'series___children___parent___id'
  | 'series___children___parent___children'
  | 'series___children___children'
  | 'series___children___children___id'
  | 'series___children___children___children'
  | 'series___children___internal___content'
  | 'series___children___internal___contentDigest'
  | 'series___children___internal___description'
  | 'series___children___internal___fieldOwners'
  | 'series___children___internal___ignoreType'
  | 'series___children___internal___mediaType'
  | 'series___children___internal___owner'
  | 'series___children___internal___type'
  | 'series___internal___content'
  | 'series___internal___contentDigest'
  | 'series___internal___description'
  | 'series___internal___fieldOwners'
  | 'series___internal___ignoreType'
  | 'series___internal___mediaType'
  | 'series___internal___owner'
  | 'series___internal___type'
  | 'series___name'
  | 'series___architecture'
  | 'series___releaseDate'
  | 'series___models'
  | 'series___models___series___id'
  | 'series___models___series___children'
  | 'series___models___series___name'
  | 'series___models___series___architecture'
  | 'series___models___series___releaseDate'
  | 'series___models___series___models'
  | 'series___models___series___website'
  | 'series___models___name'
  | 'series___models___releaseDate'
  | 'series___models___gpuEngine___nvidiaCUDACores'
  | 'series___models___gpuEngine___boostClockGhz'
  | 'series___models___memory___standardConfigSizeGB'
  | 'series___models___memory___standardConfigSpec'
  | 'series___models___memory___interfaceBandwidthBit'
  | 'series___models___display___monitorCount'
  | 'series___models___monitorCount'
  | 'series___models___connectors'
  | 'series___models___connectors___name'
  | 'series___models___connectors___count'
  | 'series___models___HDCP'
  | 'series___models___fields___slug'
  | 'series___models___fields___designer'
  | 'series___models___id'
  | 'series___models___parent___id'
  | 'series___models___parent___children'
  | 'series___models___children'
  | 'series___models___children___id'
  | 'series___models___children___children'
  | 'series___models___internal___content'
  | 'series___models___internal___contentDigest'
  | 'series___models___internal___description'
  | 'series___models___internal___fieldOwners'
  | 'series___models___internal___ignoreType'
  | 'series___models___internal___mediaType'
  | 'series___models___internal___owner'
  | 'series___models___internal___type'
  | 'series___designer___id'
  | 'series___designer___parent___id'
  | 'series___designer___parent___children'
  | 'series___designer___children'
  | 'series___designer___children___id'
  | 'series___designer___children___children'
  | 'series___designer___internal___content'
  | 'series___designer___internal___contentDigest'
  | 'series___designer___internal___description'
  | 'series___designer___internal___fieldOwners'
  | 'series___designer___internal___ignoreType'
  | 'series___designer___internal___mediaType'
  | 'series___designer___internal___owner'
  | 'series___designer___internal___type'
  | 'series___designer___name'
  | 'series___designer___website'
  | 'series___designer___fullSVG___sourceInstanceName'
  | 'series___designer___fullSVG___absolutePath'
  | 'series___designer___fullSVG___relativePath'
  | 'series___designer___fullSVG___extension'
  | 'series___designer___fullSVG___size'
  | 'series___designer___fullSVG___prettySize'
  | 'series___designer___fullSVG___modifiedTime'
  | 'series___designer___fullSVG___accessTime'
  | 'series___designer___fullSVG___changeTime'
  | 'series___designer___fullSVG___birthTime'
  | 'series___designer___fullSVG___root'
  | 'series___designer___fullSVG___dir'
  | 'series___designer___fullSVG___base'
  | 'series___designer___fullSVG___ext'
  | 'series___designer___fullSVG___name'
  | 'series___designer___fullSVG___relativeDirectory'
  | 'series___designer___fullSVG___dev'
  | 'series___designer___fullSVG___mode'
  | 'series___designer___fullSVG___nlink'
  | 'series___designer___fullSVG___uid'
  | 'series___designer___fullSVG___gid'
  | 'series___designer___fullSVG___rdev'
  | 'series___designer___fullSVG___ino'
  | 'series___designer___fullSVG___atimeMs'
  | 'series___designer___fullSVG___mtimeMs'
  | 'series___designer___fullSVG___ctimeMs'
  | 'series___designer___fullSVG___atime'
  | 'series___designer___fullSVG___mtime'
  | 'series___designer___fullSVG___ctime'
  | 'series___designer___fullSVG___birthtime'
  | 'series___designer___fullSVG___birthtimeMs'
  | 'series___designer___fullSVG___blksize'
  | 'series___designer___fullSVG___blocks'
  | 'series___designer___fullSVG___publicURL'
  | 'series___designer___fullSVG___id'
  | 'series___designer___fullSVG___children'
  | 'series___designer___series'
  | 'series___designer___series___id'
  | 'series___designer___series___children'
  | 'series___designer___series___name'
  | 'series___designer___series___architecture'
  | 'series___designer___series___releaseDate'
  | 'series___designer___series___models'
  | 'series___designer___series___website'
  | 'series___designer___models'
  | 'series___designer___models___name'
  | 'series___designer___models___releaseDate'
  | 'series___designer___models___monitorCount'
  | 'series___designer___models___connectors'
  | 'series___designer___models___HDCP'
  | 'series___designer___models___id'
  | 'series___designer___models___children'
  | 'series___website'
  | 'series___fields___designer'
  | 'models'
  | 'models___series___id'
  | 'models___series___parent___id'
  | 'models___series___parent___children'
  | 'models___series___children'
  | 'models___series___children___id'
  | 'models___series___children___children'
  | 'models___series___internal___content'
  | 'models___series___internal___contentDigest'
  | 'models___series___internal___description'
  | 'models___series___internal___fieldOwners'
  | 'models___series___internal___ignoreType'
  | 'models___series___internal___mediaType'
  | 'models___series___internal___owner'
  | 'models___series___internal___type'
  | 'models___series___name'
  | 'models___series___architecture'
  | 'models___series___releaseDate'
  | 'models___series___models'
  | 'models___series___models___name'
  | 'models___series___models___releaseDate'
  | 'models___series___models___monitorCount'
  | 'models___series___models___connectors'
  | 'models___series___models___HDCP'
  | 'models___series___models___id'
  | 'models___series___models___children'
  | 'models___series___designer___id'
  | 'models___series___designer___children'
  | 'models___series___designer___name'
  | 'models___series___designer___website'
  | 'models___series___designer___series'
  | 'models___series___designer___models'
  | 'models___series___website'
  | 'models___series___fields___designer'
  | 'models___name'
  | 'models___releaseDate'
  | 'models___gpuEngine___nvidiaCUDACores'
  | 'models___gpuEngine___boostClockGhz'
  | 'models___memory___standardConfigSizeGB'
  | 'models___memory___standardConfigSpec'
  | 'models___memory___interfaceBandwidthBit'
  | 'models___display___maxResolution___width'
  | 'models___display___maxResolution___height'
  | 'models___display___monitorCount'
  | 'models___monitorCount'
  | 'models___connectors'
  | 'models___connectors___name'
  | 'models___connectors___count'
  | 'models___HDCP'
  | 'models___fields___slug'
  | 'models___fields___designer'
  | 'models___id'
  | 'models___parent___id'
  | 'models___parent___parent___id'
  | 'models___parent___parent___children'
  | 'models___parent___children'
  | 'models___parent___children___id'
  | 'models___parent___children___children'
  | 'models___parent___internal___content'
  | 'models___parent___internal___contentDigest'
  | 'models___parent___internal___description'
  | 'models___parent___internal___fieldOwners'
  | 'models___parent___internal___ignoreType'
  | 'models___parent___internal___mediaType'
  | 'models___parent___internal___owner'
  | 'models___parent___internal___type'
  | 'models___children'
  | 'models___children___id'
  | 'models___children___parent___id'
  | 'models___children___parent___children'
  | 'models___children___children'
  | 'models___children___children___id'
  | 'models___children___children___children'
  | 'models___children___internal___content'
  | 'models___children___internal___contentDigest'
  | 'models___children___internal___description'
  | 'models___children___internal___fieldOwners'
  | 'models___children___internal___ignoreType'
  | 'models___children___internal___mediaType'
  | 'models___children___internal___owner'
  | 'models___children___internal___type'
  | 'models___internal___content'
  | 'models___internal___contentDigest'
  | 'models___internal___description'
  | 'models___internal___fieldOwners'
  | 'models___internal___ignoreType'
  | 'models___internal___mediaType'
  | 'models___internal___owner'
  | 'models___internal___type';

export type DesignerFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  fullSVG?: Maybe<FileFilterInput>;
  series?: Maybe<SeriesFilterListInput>;
  models?: Maybe<ModelsFilterListInput>;
};

export type DesignerGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DesignerEdge>;
  nodes: Array<Designer>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DesignerSortInput = {
  fields?: Maybe<Array<Maybe<DesignerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DisplaySpec = {
  maxResolution?: Maybe<MaxResolutionSpec>;
  monitorCount?: Maybe<Scalars['Int']>;
};

export type DisplaySpecFilterInput = {
  maxResolution?: Maybe<MaxResolutionSpecFilterInput>;
  monitorCount?: Maybe<IntQueryOperatorInput>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childDesigner?: Maybe<Designer>;
  childSeries?: Maybe<Series>;
  childModels?: Maybe<Models>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childDesigner___id'
  | 'childDesigner___parent___id'
  | 'childDesigner___parent___parent___id'
  | 'childDesigner___parent___parent___children'
  | 'childDesigner___parent___children'
  | 'childDesigner___parent___children___id'
  | 'childDesigner___parent___children___children'
  | 'childDesigner___parent___internal___content'
  | 'childDesigner___parent___internal___contentDigest'
  | 'childDesigner___parent___internal___description'
  | 'childDesigner___parent___internal___fieldOwners'
  | 'childDesigner___parent___internal___ignoreType'
  | 'childDesigner___parent___internal___mediaType'
  | 'childDesigner___parent___internal___owner'
  | 'childDesigner___parent___internal___type'
  | 'childDesigner___children'
  | 'childDesigner___children___id'
  | 'childDesigner___children___parent___id'
  | 'childDesigner___children___parent___children'
  | 'childDesigner___children___children'
  | 'childDesigner___children___children___id'
  | 'childDesigner___children___children___children'
  | 'childDesigner___children___internal___content'
  | 'childDesigner___children___internal___contentDigest'
  | 'childDesigner___children___internal___description'
  | 'childDesigner___children___internal___fieldOwners'
  | 'childDesigner___children___internal___ignoreType'
  | 'childDesigner___children___internal___mediaType'
  | 'childDesigner___children___internal___owner'
  | 'childDesigner___children___internal___type'
  | 'childDesigner___internal___content'
  | 'childDesigner___internal___contentDigest'
  | 'childDesigner___internal___description'
  | 'childDesigner___internal___fieldOwners'
  | 'childDesigner___internal___ignoreType'
  | 'childDesigner___internal___mediaType'
  | 'childDesigner___internal___owner'
  | 'childDesigner___internal___type'
  | 'childDesigner___name'
  | 'childDesigner___website'
  | 'childDesigner___fullSVG___sourceInstanceName'
  | 'childDesigner___fullSVG___absolutePath'
  | 'childDesigner___fullSVG___relativePath'
  | 'childDesigner___fullSVG___extension'
  | 'childDesigner___fullSVG___size'
  | 'childDesigner___fullSVG___prettySize'
  | 'childDesigner___fullSVG___modifiedTime'
  | 'childDesigner___fullSVG___accessTime'
  | 'childDesigner___fullSVG___changeTime'
  | 'childDesigner___fullSVG___birthTime'
  | 'childDesigner___fullSVG___root'
  | 'childDesigner___fullSVG___dir'
  | 'childDesigner___fullSVG___base'
  | 'childDesigner___fullSVG___ext'
  | 'childDesigner___fullSVG___name'
  | 'childDesigner___fullSVG___relativeDirectory'
  | 'childDesigner___fullSVG___dev'
  | 'childDesigner___fullSVG___mode'
  | 'childDesigner___fullSVG___nlink'
  | 'childDesigner___fullSVG___uid'
  | 'childDesigner___fullSVG___gid'
  | 'childDesigner___fullSVG___rdev'
  | 'childDesigner___fullSVG___ino'
  | 'childDesigner___fullSVG___atimeMs'
  | 'childDesigner___fullSVG___mtimeMs'
  | 'childDesigner___fullSVG___ctimeMs'
  | 'childDesigner___fullSVG___atime'
  | 'childDesigner___fullSVG___mtime'
  | 'childDesigner___fullSVG___ctime'
  | 'childDesigner___fullSVG___birthtime'
  | 'childDesigner___fullSVG___birthtimeMs'
  | 'childDesigner___fullSVG___blksize'
  | 'childDesigner___fullSVG___blocks'
  | 'childDesigner___fullSVG___publicURL'
  | 'childDesigner___fullSVG___childImageSharp___id'
  | 'childDesigner___fullSVG___childImageSharp___children'
  | 'childDesigner___fullSVG___id'
  | 'childDesigner___fullSVG___parent___id'
  | 'childDesigner___fullSVG___parent___children'
  | 'childDesigner___fullSVG___children'
  | 'childDesigner___fullSVG___children___id'
  | 'childDesigner___fullSVG___children___children'
  | 'childDesigner___fullSVG___internal___content'
  | 'childDesigner___fullSVG___internal___contentDigest'
  | 'childDesigner___fullSVG___internal___description'
  | 'childDesigner___fullSVG___internal___fieldOwners'
  | 'childDesigner___fullSVG___internal___ignoreType'
  | 'childDesigner___fullSVG___internal___mediaType'
  | 'childDesigner___fullSVG___internal___owner'
  | 'childDesigner___fullSVG___internal___type'
  | 'childDesigner___fullSVG___childDesigner___id'
  | 'childDesigner___fullSVG___childDesigner___children'
  | 'childDesigner___fullSVG___childDesigner___name'
  | 'childDesigner___fullSVG___childDesigner___website'
  | 'childDesigner___fullSVG___childDesigner___series'
  | 'childDesigner___fullSVG___childDesigner___models'
  | 'childDesigner___fullSVG___childSeries___id'
  | 'childDesigner___fullSVG___childSeries___children'
  | 'childDesigner___fullSVG___childSeries___name'
  | 'childDesigner___fullSVG___childSeries___architecture'
  | 'childDesigner___fullSVG___childSeries___releaseDate'
  | 'childDesigner___fullSVG___childSeries___models'
  | 'childDesigner___fullSVG___childSeries___website'
  | 'childDesigner___fullSVG___childModels___name'
  | 'childDesigner___fullSVG___childModels___releaseDate'
  | 'childDesigner___fullSVG___childModels___monitorCount'
  | 'childDesigner___fullSVG___childModels___connectors'
  | 'childDesigner___fullSVG___childModels___HDCP'
  | 'childDesigner___fullSVG___childModels___id'
  | 'childDesigner___fullSVG___childModels___children'
  | 'childDesigner___series'
  | 'childDesigner___series___id'
  | 'childDesigner___series___parent___id'
  | 'childDesigner___series___parent___children'
  | 'childDesigner___series___children'
  | 'childDesigner___series___children___id'
  | 'childDesigner___series___children___children'
  | 'childDesigner___series___internal___content'
  | 'childDesigner___series___internal___contentDigest'
  | 'childDesigner___series___internal___description'
  | 'childDesigner___series___internal___fieldOwners'
  | 'childDesigner___series___internal___ignoreType'
  | 'childDesigner___series___internal___mediaType'
  | 'childDesigner___series___internal___owner'
  | 'childDesigner___series___internal___type'
  | 'childDesigner___series___name'
  | 'childDesigner___series___architecture'
  | 'childDesigner___series___releaseDate'
  | 'childDesigner___series___models'
  | 'childDesigner___series___models___name'
  | 'childDesigner___series___models___releaseDate'
  | 'childDesigner___series___models___monitorCount'
  | 'childDesigner___series___models___connectors'
  | 'childDesigner___series___models___HDCP'
  | 'childDesigner___series___models___id'
  | 'childDesigner___series___models___children'
  | 'childDesigner___series___designer___id'
  | 'childDesigner___series___designer___children'
  | 'childDesigner___series___designer___name'
  | 'childDesigner___series___designer___website'
  | 'childDesigner___series___designer___series'
  | 'childDesigner___series___designer___models'
  | 'childDesigner___series___website'
  | 'childDesigner___series___fields___designer'
  | 'childDesigner___models'
  | 'childDesigner___models___series___id'
  | 'childDesigner___models___series___children'
  | 'childDesigner___models___series___name'
  | 'childDesigner___models___series___architecture'
  | 'childDesigner___models___series___releaseDate'
  | 'childDesigner___models___series___models'
  | 'childDesigner___models___series___website'
  | 'childDesigner___models___name'
  | 'childDesigner___models___releaseDate'
  | 'childDesigner___models___gpuEngine___nvidiaCUDACores'
  | 'childDesigner___models___gpuEngine___boostClockGhz'
  | 'childDesigner___models___memory___standardConfigSizeGB'
  | 'childDesigner___models___memory___standardConfigSpec'
  | 'childDesigner___models___memory___interfaceBandwidthBit'
  | 'childDesigner___models___display___monitorCount'
  | 'childDesigner___models___monitorCount'
  | 'childDesigner___models___connectors'
  | 'childDesigner___models___connectors___name'
  | 'childDesigner___models___connectors___count'
  | 'childDesigner___models___HDCP'
  | 'childDesigner___models___fields___slug'
  | 'childDesigner___models___fields___designer'
  | 'childDesigner___models___id'
  | 'childDesigner___models___parent___id'
  | 'childDesigner___models___parent___children'
  | 'childDesigner___models___children'
  | 'childDesigner___models___children___id'
  | 'childDesigner___models___children___children'
  | 'childDesigner___models___internal___content'
  | 'childDesigner___models___internal___contentDigest'
  | 'childDesigner___models___internal___description'
  | 'childDesigner___models___internal___fieldOwners'
  | 'childDesigner___models___internal___ignoreType'
  | 'childDesigner___models___internal___mediaType'
  | 'childDesigner___models___internal___owner'
  | 'childDesigner___models___internal___type'
  | 'childSeries___id'
  | 'childSeries___parent___id'
  | 'childSeries___parent___parent___id'
  | 'childSeries___parent___parent___children'
  | 'childSeries___parent___children'
  | 'childSeries___parent___children___id'
  | 'childSeries___parent___children___children'
  | 'childSeries___parent___internal___content'
  | 'childSeries___parent___internal___contentDigest'
  | 'childSeries___parent___internal___description'
  | 'childSeries___parent___internal___fieldOwners'
  | 'childSeries___parent___internal___ignoreType'
  | 'childSeries___parent___internal___mediaType'
  | 'childSeries___parent___internal___owner'
  | 'childSeries___parent___internal___type'
  | 'childSeries___children'
  | 'childSeries___children___id'
  | 'childSeries___children___parent___id'
  | 'childSeries___children___parent___children'
  | 'childSeries___children___children'
  | 'childSeries___children___children___id'
  | 'childSeries___children___children___children'
  | 'childSeries___children___internal___content'
  | 'childSeries___children___internal___contentDigest'
  | 'childSeries___children___internal___description'
  | 'childSeries___children___internal___fieldOwners'
  | 'childSeries___children___internal___ignoreType'
  | 'childSeries___children___internal___mediaType'
  | 'childSeries___children___internal___owner'
  | 'childSeries___children___internal___type'
  | 'childSeries___internal___content'
  | 'childSeries___internal___contentDigest'
  | 'childSeries___internal___description'
  | 'childSeries___internal___fieldOwners'
  | 'childSeries___internal___ignoreType'
  | 'childSeries___internal___mediaType'
  | 'childSeries___internal___owner'
  | 'childSeries___internal___type'
  | 'childSeries___name'
  | 'childSeries___architecture'
  | 'childSeries___releaseDate'
  | 'childSeries___models'
  | 'childSeries___models___series___id'
  | 'childSeries___models___series___children'
  | 'childSeries___models___series___name'
  | 'childSeries___models___series___architecture'
  | 'childSeries___models___series___releaseDate'
  | 'childSeries___models___series___models'
  | 'childSeries___models___series___website'
  | 'childSeries___models___name'
  | 'childSeries___models___releaseDate'
  | 'childSeries___models___gpuEngine___nvidiaCUDACores'
  | 'childSeries___models___gpuEngine___boostClockGhz'
  | 'childSeries___models___memory___standardConfigSizeGB'
  | 'childSeries___models___memory___standardConfigSpec'
  | 'childSeries___models___memory___interfaceBandwidthBit'
  | 'childSeries___models___display___monitorCount'
  | 'childSeries___models___monitorCount'
  | 'childSeries___models___connectors'
  | 'childSeries___models___connectors___name'
  | 'childSeries___models___connectors___count'
  | 'childSeries___models___HDCP'
  | 'childSeries___models___fields___slug'
  | 'childSeries___models___fields___designer'
  | 'childSeries___models___id'
  | 'childSeries___models___parent___id'
  | 'childSeries___models___parent___children'
  | 'childSeries___models___children'
  | 'childSeries___models___children___id'
  | 'childSeries___models___children___children'
  | 'childSeries___models___internal___content'
  | 'childSeries___models___internal___contentDigest'
  | 'childSeries___models___internal___description'
  | 'childSeries___models___internal___fieldOwners'
  | 'childSeries___models___internal___ignoreType'
  | 'childSeries___models___internal___mediaType'
  | 'childSeries___models___internal___owner'
  | 'childSeries___models___internal___type'
  | 'childSeries___designer___id'
  | 'childSeries___designer___parent___id'
  | 'childSeries___designer___parent___children'
  | 'childSeries___designer___children'
  | 'childSeries___designer___children___id'
  | 'childSeries___designer___children___children'
  | 'childSeries___designer___internal___content'
  | 'childSeries___designer___internal___contentDigest'
  | 'childSeries___designer___internal___description'
  | 'childSeries___designer___internal___fieldOwners'
  | 'childSeries___designer___internal___ignoreType'
  | 'childSeries___designer___internal___mediaType'
  | 'childSeries___designer___internal___owner'
  | 'childSeries___designer___internal___type'
  | 'childSeries___designer___name'
  | 'childSeries___designer___website'
  | 'childSeries___designer___fullSVG___sourceInstanceName'
  | 'childSeries___designer___fullSVG___absolutePath'
  | 'childSeries___designer___fullSVG___relativePath'
  | 'childSeries___designer___fullSVG___extension'
  | 'childSeries___designer___fullSVG___size'
  | 'childSeries___designer___fullSVG___prettySize'
  | 'childSeries___designer___fullSVG___modifiedTime'
  | 'childSeries___designer___fullSVG___accessTime'
  | 'childSeries___designer___fullSVG___changeTime'
  | 'childSeries___designer___fullSVG___birthTime'
  | 'childSeries___designer___fullSVG___root'
  | 'childSeries___designer___fullSVG___dir'
  | 'childSeries___designer___fullSVG___base'
  | 'childSeries___designer___fullSVG___ext'
  | 'childSeries___designer___fullSVG___name'
  | 'childSeries___designer___fullSVG___relativeDirectory'
  | 'childSeries___designer___fullSVG___dev'
  | 'childSeries___designer___fullSVG___mode'
  | 'childSeries___designer___fullSVG___nlink'
  | 'childSeries___designer___fullSVG___uid'
  | 'childSeries___designer___fullSVG___gid'
  | 'childSeries___designer___fullSVG___rdev'
  | 'childSeries___designer___fullSVG___ino'
  | 'childSeries___designer___fullSVG___atimeMs'
  | 'childSeries___designer___fullSVG___mtimeMs'
  | 'childSeries___designer___fullSVG___ctimeMs'
  | 'childSeries___designer___fullSVG___atime'
  | 'childSeries___designer___fullSVG___mtime'
  | 'childSeries___designer___fullSVG___ctime'
  | 'childSeries___designer___fullSVG___birthtime'
  | 'childSeries___designer___fullSVG___birthtimeMs'
  | 'childSeries___designer___fullSVG___blksize'
  | 'childSeries___designer___fullSVG___blocks'
  | 'childSeries___designer___fullSVG___publicURL'
  | 'childSeries___designer___fullSVG___id'
  | 'childSeries___designer___fullSVG___children'
  | 'childSeries___designer___series'
  | 'childSeries___designer___series___id'
  | 'childSeries___designer___series___children'
  | 'childSeries___designer___series___name'
  | 'childSeries___designer___series___architecture'
  | 'childSeries___designer___series___releaseDate'
  | 'childSeries___designer___series___models'
  | 'childSeries___designer___series___website'
  | 'childSeries___designer___models'
  | 'childSeries___designer___models___name'
  | 'childSeries___designer___models___releaseDate'
  | 'childSeries___designer___models___monitorCount'
  | 'childSeries___designer___models___connectors'
  | 'childSeries___designer___models___HDCP'
  | 'childSeries___designer___models___id'
  | 'childSeries___designer___models___children'
  | 'childSeries___website'
  | 'childSeries___fields___designer'
  | 'childModels___series___id'
  | 'childModels___series___parent___id'
  | 'childModels___series___parent___children'
  | 'childModels___series___children'
  | 'childModels___series___children___id'
  | 'childModels___series___children___children'
  | 'childModels___series___internal___content'
  | 'childModels___series___internal___contentDigest'
  | 'childModels___series___internal___description'
  | 'childModels___series___internal___fieldOwners'
  | 'childModels___series___internal___ignoreType'
  | 'childModels___series___internal___mediaType'
  | 'childModels___series___internal___owner'
  | 'childModels___series___internal___type'
  | 'childModels___series___name'
  | 'childModels___series___architecture'
  | 'childModels___series___releaseDate'
  | 'childModels___series___models'
  | 'childModels___series___models___name'
  | 'childModels___series___models___releaseDate'
  | 'childModels___series___models___monitorCount'
  | 'childModels___series___models___connectors'
  | 'childModels___series___models___HDCP'
  | 'childModels___series___models___id'
  | 'childModels___series___models___children'
  | 'childModels___series___designer___id'
  | 'childModels___series___designer___children'
  | 'childModels___series___designer___name'
  | 'childModels___series___designer___website'
  | 'childModels___series___designer___series'
  | 'childModels___series___designer___models'
  | 'childModels___series___website'
  | 'childModels___series___fields___designer'
  | 'childModels___name'
  | 'childModels___releaseDate'
  | 'childModels___gpuEngine___nvidiaCUDACores'
  | 'childModels___gpuEngine___boostClockGhz'
  | 'childModels___memory___standardConfigSizeGB'
  | 'childModels___memory___standardConfigSpec'
  | 'childModels___memory___interfaceBandwidthBit'
  | 'childModels___display___maxResolution___width'
  | 'childModels___display___maxResolution___height'
  | 'childModels___display___monitorCount'
  | 'childModels___monitorCount'
  | 'childModels___connectors'
  | 'childModels___connectors___name'
  | 'childModels___connectors___count'
  | 'childModels___HDCP'
  | 'childModels___fields___slug'
  | 'childModels___fields___designer'
  | 'childModels___id'
  | 'childModels___parent___id'
  | 'childModels___parent___parent___id'
  | 'childModels___parent___parent___children'
  | 'childModels___parent___children'
  | 'childModels___parent___children___id'
  | 'childModels___parent___children___children'
  | 'childModels___parent___internal___content'
  | 'childModels___parent___internal___contentDigest'
  | 'childModels___parent___internal___description'
  | 'childModels___parent___internal___fieldOwners'
  | 'childModels___parent___internal___ignoreType'
  | 'childModels___parent___internal___mediaType'
  | 'childModels___parent___internal___owner'
  | 'childModels___parent___internal___type'
  | 'childModels___children'
  | 'childModels___children___id'
  | 'childModels___children___parent___id'
  | 'childModels___children___parent___children'
  | 'childModels___children___children'
  | 'childModels___children___children___id'
  | 'childModels___children___children___children'
  | 'childModels___children___internal___content'
  | 'childModels___children___internal___contentDigest'
  | 'childModels___children___internal___description'
  | 'childModels___children___internal___fieldOwners'
  | 'childModels___children___internal___ignoreType'
  | 'childModels___children___internal___mediaType'
  | 'childModels___children___internal___owner'
  | 'childModels___children___internal___type'
  | 'childModels___internal___content'
  | 'childModels___internal___contentDigest'
  | 'childModels___internal___description'
  | 'childModels___internal___fieldOwners'
  | 'childModels___internal___ignoreType'
  | 'childModels___internal___mediaType'
  | 'childModels___internal___owner'
  | 'childModels___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childDesigner?: Maybe<DesignerFilterInput>;
  childSeries?: Maybe<SeriesFilterInput>;
  childModels?: Maybe<ModelsFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GpuEngineSpec = {
  nvidiaCUDACores?: Maybe<Scalars['Int']>;
  boostClockGhz?: Maybe<Scalars['Float']>;
};

export type GpuEngineSpecFilterInput = {
  nvidiaCUDACores?: Maybe<IntQueryOperatorInput>;
  boostClockGhz?: Maybe<FloatQueryOperatorInput>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type MaxResolutionSpec = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type MaxResolutionSpecFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type MemorySpec = {
  standardConfigSizeGB?: Maybe<Scalars['Int']>;
  standardConfigSpec?: Maybe<Scalars['String']>;
  interfaceBandwidthBit?: Maybe<Scalars['Int']>;
};

export type MemorySpecFilterInput = {
  standardConfigSizeGB?: Maybe<IntQueryOperatorInput>;
  standardConfigSpec?: Maybe<StringQueryOperatorInput>;
  interfaceBandwidthBit?: Maybe<IntQueryOperatorInput>;
};

export type Models = Node & {
  series?: Maybe<Series>;
  name?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['Date']>;
  gpuEngine?: Maybe<GpuEngineSpec>;
  memory?: Maybe<MemorySpec>;
  display?: Maybe<DisplaySpec>;
  monitorCount?: Maybe<Scalars['Int']>;
  connectors?: Maybe<Array<Maybe<ConnectorSpec>>>;
  HDCP?: Maybe<Scalars['String']>;
  fields?: Maybe<ModelsFields>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ModelsReleaseDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ModelsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ModelsEdge>;
  nodes: Array<Models>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ModelsGroupConnection>;
};


export type ModelsConnectionDistinctArgs = {
  field: ModelsFieldsEnum;
};


export type ModelsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ModelsFieldsEnum;
};

export type ModelsEdge = {
  next?: Maybe<Models>;
  node: Models;
  previous?: Maybe<Models>;
};

export type ModelsFields = {
  slug?: Maybe<Scalars['String']>;
  designer?: Maybe<Scalars['String']>;
};

export type ModelsFieldsEnum = 
  | 'series___id'
  | 'series___parent___id'
  | 'series___parent___parent___id'
  | 'series___parent___parent___children'
  | 'series___parent___children'
  | 'series___parent___children___id'
  | 'series___parent___children___children'
  | 'series___parent___internal___content'
  | 'series___parent___internal___contentDigest'
  | 'series___parent___internal___description'
  | 'series___parent___internal___fieldOwners'
  | 'series___parent___internal___ignoreType'
  | 'series___parent___internal___mediaType'
  | 'series___parent___internal___owner'
  | 'series___parent___internal___type'
  | 'series___children'
  | 'series___children___id'
  | 'series___children___parent___id'
  | 'series___children___parent___children'
  | 'series___children___children'
  | 'series___children___children___id'
  | 'series___children___children___children'
  | 'series___children___internal___content'
  | 'series___children___internal___contentDigest'
  | 'series___children___internal___description'
  | 'series___children___internal___fieldOwners'
  | 'series___children___internal___ignoreType'
  | 'series___children___internal___mediaType'
  | 'series___children___internal___owner'
  | 'series___children___internal___type'
  | 'series___internal___content'
  | 'series___internal___contentDigest'
  | 'series___internal___description'
  | 'series___internal___fieldOwners'
  | 'series___internal___ignoreType'
  | 'series___internal___mediaType'
  | 'series___internal___owner'
  | 'series___internal___type'
  | 'series___name'
  | 'series___architecture'
  | 'series___releaseDate'
  | 'series___models'
  | 'series___models___series___id'
  | 'series___models___series___children'
  | 'series___models___series___name'
  | 'series___models___series___architecture'
  | 'series___models___series___releaseDate'
  | 'series___models___series___models'
  | 'series___models___series___website'
  | 'series___models___name'
  | 'series___models___releaseDate'
  | 'series___models___gpuEngine___nvidiaCUDACores'
  | 'series___models___gpuEngine___boostClockGhz'
  | 'series___models___memory___standardConfigSizeGB'
  | 'series___models___memory___standardConfigSpec'
  | 'series___models___memory___interfaceBandwidthBit'
  | 'series___models___display___monitorCount'
  | 'series___models___monitorCount'
  | 'series___models___connectors'
  | 'series___models___connectors___name'
  | 'series___models___connectors___count'
  | 'series___models___HDCP'
  | 'series___models___fields___slug'
  | 'series___models___fields___designer'
  | 'series___models___id'
  | 'series___models___parent___id'
  | 'series___models___parent___children'
  | 'series___models___children'
  | 'series___models___children___id'
  | 'series___models___children___children'
  | 'series___models___internal___content'
  | 'series___models___internal___contentDigest'
  | 'series___models___internal___description'
  | 'series___models___internal___fieldOwners'
  | 'series___models___internal___ignoreType'
  | 'series___models___internal___mediaType'
  | 'series___models___internal___owner'
  | 'series___models___internal___type'
  | 'series___designer___id'
  | 'series___designer___parent___id'
  | 'series___designer___parent___children'
  | 'series___designer___children'
  | 'series___designer___children___id'
  | 'series___designer___children___children'
  | 'series___designer___internal___content'
  | 'series___designer___internal___contentDigest'
  | 'series___designer___internal___description'
  | 'series___designer___internal___fieldOwners'
  | 'series___designer___internal___ignoreType'
  | 'series___designer___internal___mediaType'
  | 'series___designer___internal___owner'
  | 'series___designer___internal___type'
  | 'series___designer___name'
  | 'series___designer___website'
  | 'series___designer___fullSVG___sourceInstanceName'
  | 'series___designer___fullSVG___absolutePath'
  | 'series___designer___fullSVG___relativePath'
  | 'series___designer___fullSVG___extension'
  | 'series___designer___fullSVG___size'
  | 'series___designer___fullSVG___prettySize'
  | 'series___designer___fullSVG___modifiedTime'
  | 'series___designer___fullSVG___accessTime'
  | 'series___designer___fullSVG___changeTime'
  | 'series___designer___fullSVG___birthTime'
  | 'series___designer___fullSVG___root'
  | 'series___designer___fullSVG___dir'
  | 'series___designer___fullSVG___base'
  | 'series___designer___fullSVG___ext'
  | 'series___designer___fullSVG___name'
  | 'series___designer___fullSVG___relativeDirectory'
  | 'series___designer___fullSVG___dev'
  | 'series___designer___fullSVG___mode'
  | 'series___designer___fullSVG___nlink'
  | 'series___designer___fullSVG___uid'
  | 'series___designer___fullSVG___gid'
  | 'series___designer___fullSVG___rdev'
  | 'series___designer___fullSVG___ino'
  | 'series___designer___fullSVG___atimeMs'
  | 'series___designer___fullSVG___mtimeMs'
  | 'series___designer___fullSVG___ctimeMs'
  | 'series___designer___fullSVG___atime'
  | 'series___designer___fullSVG___mtime'
  | 'series___designer___fullSVG___ctime'
  | 'series___designer___fullSVG___birthtime'
  | 'series___designer___fullSVG___birthtimeMs'
  | 'series___designer___fullSVG___blksize'
  | 'series___designer___fullSVG___blocks'
  | 'series___designer___fullSVG___publicURL'
  | 'series___designer___fullSVG___id'
  | 'series___designer___fullSVG___children'
  | 'series___designer___series'
  | 'series___designer___series___id'
  | 'series___designer___series___children'
  | 'series___designer___series___name'
  | 'series___designer___series___architecture'
  | 'series___designer___series___releaseDate'
  | 'series___designer___series___models'
  | 'series___designer___series___website'
  | 'series___designer___models'
  | 'series___designer___models___name'
  | 'series___designer___models___releaseDate'
  | 'series___designer___models___monitorCount'
  | 'series___designer___models___connectors'
  | 'series___designer___models___HDCP'
  | 'series___designer___models___id'
  | 'series___designer___models___children'
  | 'series___website'
  | 'series___fields___designer'
  | 'name'
  | 'releaseDate'
  | 'gpuEngine___nvidiaCUDACores'
  | 'gpuEngine___boostClockGhz'
  | 'memory___standardConfigSizeGB'
  | 'memory___standardConfigSpec'
  | 'memory___interfaceBandwidthBit'
  | 'display___maxResolution___width'
  | 'display___maxResolution___height'
  | 'display___monitorCount'
  | 'monitorCount'
  | 'connectors'
  | 'connectors___name'
  | 'connectors___count'
  | 'HDCP'
  | 'fields___slug'
  | 'fields___designer'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ModelsFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  designer?: Maybe<StringQueryOperatorInput>;
};

export type ModelsFilterInput = {
  series?: Maybe<SeriesFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  releaseDate?: Maybe<DateQueryOperatorInput>;
  gpuEngine?: Maybe<GpuEngineSpecFilterInput>;
  memory?: Maybe<MemorySpecFilterInput>;
  display?: Maybe<DisplaySpecFilterInput>;
  monitorCount?: Maybe<IntQueryOperatorInput>;
  connectors?: Maybe<ConnectorSpecFilterListInput>;
  HDCP?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ModelsFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ModelsFilterListInput = {
  elemMatch?: Maybe<ModelsFilterInput>;
};

export type ModelsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ModelsEdge>;
  nodes: Array<Models>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ModelsSortInput = {
  fields?: Maybe<Array<Maybe<ModelsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  series?: Maybe<Series>;
  allSeries: SeriesConnection;
  models?: Maybe<Models>;
  allModels: ModelsConnection;
  designer?: Maybe<Designer>;
  allDesigner: DesignerConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  recentModels: Array<Models>;
  recentSeries: Array<Series>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childDesigner?: Maybe<DesignerFilterInput>;
  childSeries?: Maybe<SeriesFilterInput>;
  childModels?: Maybe<ModelsFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySeriesArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  architecture?: Maybe<StringQueryOperatorInput>;
  releaseDate?: Maybe<DateQueryOperatorInput>;
  models?: Maybe<ModelsFilterListInput>;
  designer?: Maybe<DesignerFilterInput>;
  website?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SeriesFieldsFilterInput>;
};


export type QueryAllSeriesArgs = {
  filter?: Maybe<SeriesFilterInput>;
  sort?: Maybe<SeriesSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryModelsArgs = {
  series?: Maybe<SeriesFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  releaseDate?: Maybe<DateQueryOperatorInput>;
  gpuEngine?: Maybe<GpuEngineSpecFilterInput>;
  memory?: Maybe<MemorySpecFilterInput>;
  display?: Maybe<DisplaySpecFilterInput>;
  monitorCount?: Maybe<IntQueryOperatorInput>;
  connectors?: Maybe<ConnectorSpecFilterListInput>;
  HDCP?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<ModelsFieldsFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllModelsArgs = {
  filter?: Maybe<ModelsFilterInput>;
  sort?: Maybe<ModelsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDesignerArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  fullSVG?: Maybe<FileFilterInput>;
  series?: Maybe<SeriesFilterListInput>;
  models?: Maybe<ModelsFilterListInput>;
};


export type QueryAllDesignerArgs = {
  filter?: Maybe<DesignerFilterInput>;
  sort?: Maybe<DesignerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Series = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  architecture?: Maybe<Scalars['String']>;
  releaseDate?: Maybe<Scalars['Date']>;
  models?: Maybe<Array<Maybe<Models>>>;
  designer?: Maybe<Designer>;
  website?: Maybe<Scalars['String']>;
  fields?: Maybe<SeriesFields>;
};


export type SeriesReleaseDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SeriesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SeriesEdge>;
  nodes: Array<Series>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SeriesGroupConnection>;
};


export type SeriesConnectionDistinctArgs = {
  field: SeriesFieldsEnum;
};


export type SeriesConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SeriesFieldsEnum;
};

export type SeriesEdge = {
  next?: Maybe<Series>;
  node: Series;
  previous?: Maybe<Series>;
};

export type SeriesFields = {
  designer?: Maybe<Scalars['String']>;
};

export type SeriesFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'architecture'
  | 'releaseDate'
  | 'models'
  | 'models___series___id'
  | 'models___series___parent___id'
  | 'models___series___parent___children'
  | 'models___series___children'
  | 'models___series___children___id'
  | 'models___series___children___children'
  | 'models___series___internal___content'
  | 'models___series___internal___contentDigest'
  | 'models___series___internal___description'
  | 'models___series___internal___fieldOwners'
  | 'models___series___internal___ignoreType'
  | 'models___series___internal___mediaType'
  | 'models___series___internal___owner'
  | 'models___series___internal___type'
  | 'models___series___name'
  | 'models___series___architecture'
  | 'models___series___releaseDate'
  | 'models___series___models'
  | 'models___series___models___name'
  | 'models___series___models___releaseDate'
  | 'models___series___models___monitorCount'
  | 'models___series___models___connectors'
  | 'models___series___models___HDCP'
  | 'models___series___models___id'
  | 'models___series___models___children'
  | 'models___series___designer___id'
  | 'models___series___designer___children'
  | 'models___series___designer___name'
  | 'models___series___designer___website'
  | 'models___series___designer___series'
  | 'models___series___designer___models'
  | 'models___series___website'
  | 'models___series___fields___designer'
  | 'models___name'
  | 'models___releaseDate'
  | 'models___gpuEngine___nvidiaCUDACores'
  | 'models___gpuEngine___boostClockGhz'
  | 'models___memory___standardConfigSizeGB'
  | 'models___memory___standardConfigSpec'
  | 'models___memory___interfaceBandwidthBit'
  | 'models___display___maxResolution___width'
  | 'models___display___maxResolution___height'
  | 'models___display___monitorCount'
  | 'models___monitorCount'
  | 'models___connectors'
  | 'models___connectors___name'
  | 'models___connectors___count'
  | 'models___HDCP'
  | 'models___fields___slug'
  | 'models___fields___designer'
  | 'models___id'
  | 'models___parent___id'
  | 'models___parent___parent___id'
  | 'models___parent___parent___children'
  | 'models___parent___children'
  | 'models___parent___children___id'
  | 'models___parent___children___children'
  | 'models___parent___internal___content'
  | 'models___parent___internal___contentDigest'
  | 'models___parent___internal___description'
  | 'models___parent___internal___fieldOwners'
  | 'models___parent___internal___ignoreType'
  | 'models___parent___internal___mediaType'
  | 'models___parent___internal___owner'
  | 'models___parent___internal___type'
  | 'models___children'
  | 'models___children___id'
  | 'models___children___parent___id'
  | 'models___children___parent___children'
  | 'models___children___children'
  | 'models___children___children___id'
  | 'models___children___children___children'
  | 'models___children___internal___content'
  | 'models___children___internal___contentDigest'
  | 'models___children___internal___description'
  | 'models___children___internal___fieldOwners'
  | 'models___children___internal___ignoreType'
  | 'models___children___internal___mediaType'
  | 'models___children___internal___owner'
  | 'models___children___internal___type'
  | 'models___internal___content'
  | 'models___internal___contentDigest'
  | 'models___internal___description'
  | 'models___internal___fieldOwners'
  | 'models___internal___ignoreType'
  | 'models___internal___mediaType'
  | 'models___internal___owner'
  | 'models___internal___type'
  | 'designer___id'
  | 'designer___parent___id'
  | 'designer___parent___parent___id'
  | 'designer___parent___parent___children'
  | 'designer___parent___children'
  | 'designer___parent___children___id'
  | 'designer___parent___children___children'
  | 'designer___parent___internal___content'
  | 'designer___parent___internal___contentDigest'
  | 'designer___parent___internal___description'
  | 'designer___parent___internal___fieldOwners'
  | 'designer___parent___internal___ignoreType'
  | 'designer___parent___internal___mediaType'
  | 'designer___parent___internal___owner'
  | 'designer___parent___internal___type'
  | 'designer___children'
  | 'designer___children___id'
  | 'designer___children___parent___id'
  | 'designer___children___parent___children'
  | 'designer___children___children'
  | 'designer___children___children___id'
  | 'designer___children___children___children'
  | 'designer___children___internal___content'
  | 'designer___children___internal___contentDigest'
  | 'designer___children___internal___description'
  | 'designer___children___internal___fieldOwners'
  | 'designer___children___internal___ignoreType'
  | 'designer___children___internal___mediaType'
  | 'designer___children___internal___owner'
  | 'designer___children___internal___type'
  | 'designer___internal___content'
  | 'designer___internal___contentDigest'
  | 'designer___internal___description'
  | 'designer___internal___fieldOwners'
  | 'designer___internal___ignoreType'
  | 'designer___internal___mediaType'
  | 'designer___internal___owner'
  | 'designer___internal___type'
  | 'designer___name'
  | 'designer___website'
  | 'designer___fullSVG___sourceInstanceName'
  | 'designer___fullSVG___absolutePath'
  | 'designer___fullSVG___relativePath'
  | 'designer___fullSVG___extension'
  | 'designer___fullSVG___size'
  | 'designer___fullSVG___prettySize'
  | 'designer___fullSVG___modifiedTime'
  | 'designer___fullSVG___accessTime'
  | 'designer___fullSVG___changeTime'
  | 'designer___fullSVG___birthTime'
  | 'designer___fullSVG___root'
  | 'designer___fullSVG___dir'
  | 'designer___fullSVG___base'
  | 'designer___fullSVG___ext'
  | 'designer___fullSVG___name'
  | 'designer___fullSVG___relativeDirectory'
  | 'designer___fullSVG___dev'
  | 'designer___fullSVG___mode'
  | 'designer___fullSVG___nlink'
  | 'designer___fullSVG___uid'
  | 'designer___fullSVG___gid'
  | 'designer___fullSVG___rdev'
  | 'designer___fullSVG___ino'
  | 'designer___fullSVG___atimeMs'
  | 'designer___fullSVG___mtimeMs'
  | 'designer___fullSVG___ctimeMs'
  | 'designer___fullSVG___atime'
  | 'designer___fullSVG___mtime'
  | 'designer___fullSVG___ctime'
  | 'designer___fullSVG___birthtime'
  | 'designer___fullSVG___birthtimeMs'
  | 'designer___fullSVG___blksize'
  | 'designer___fullSVG___blocks'
  | 'designer___fullSVG___publicURL'
  | 'designer___fullSVG___childImageSharp___id'
  | 'designer___fullSVG___childImageSharp___children'
  | 'designer___fullSVG___id'
  | 'designer___fullSVG___parent___id'
  | 'designer___fullSVG___parent___children'
  | 'designer___fullSVG___children'
  | 'designer___fullSVG___children___id'
  | 'designer___fullSVG___children___children'
  | 'designer___fullSVG___internal___content'
  | 'designer___fullSVG___internal___contentDigest'
  | 'designer___fullSVG___internal___description'
  | 'designer___fullSVG___internal___fieldOwners'
  | 'designer___fullSVG___internal___ignoreType'
  | 'designer___fullSVG___internal___mediaType'
  | 'designer___fullSVG___internal___owner'
  | 'designer___fullSVG___internal___type'
  | 'designer___fullSVG___childDesigner___id'
  | 'designer___fullSVG___childDesigner___children'
  | 'designer___fullSVG___childDesigner___name'
  | 'designer___fullSVG___childDesigner___website'
  | 'designer___fullSVG___childDesigner___series'
  | 'designer___fullSVG___childDesigner___models'
  | 'designer___fullSVG___childSeries___id'
  | 'designer___fullSVG___childSeries___children'
  | 'designer___fullSVG___childSeries___name'
  | 'designer___fullSVG___childSeries___architecture'
  | 'designer___fullSVG___childSeries___releaseDate'
  | 'designer___fullSVG___childSeries___models'
  | 'designer___fullSVG___childSeries___website'
  | 'designer___fullSVG___childModels___name'
  | 'designer___fullSVG___childModels___releaseDate'
  | 'designer___fullSVG___childModels___monitorCount'
  | 'designer___fullSVG___childModels___connectors'
  | 'designer___fullSVG___childModels___HDCP'
  | 'designer___fullSVG___childModels___id'
  | 'designer___fullSVG___childModels___children'
  | 'designer___series'
  | 'designer___series___id'
  | 'designer___series___parent___id'
  | 'designer___series___parent___children'
  | 'designer___series___children'
  | 'designer___series___children___id'
  | 'designer___series___children___children'
  | 'designer___series___internal___content'
  | 'designer___series___internal___contentDigest'
  | 'designer___series___internal___description'
  | 'designer___series___internal___fieldOwners'
  | 'designer___series___internal___ignoreType'
  | 'designer___series___internal___mediaType'
  | 'designer___series___internal___owner'
  | 'designer___series___internal___type'
  | 'designer___series___name'
  | 'designer___series___architecture'
  | 'designer___series___releaseDate'
  | 'designer___series___models'
  | 'designer___series___models___name'
  | 'designer___series___models___releaseDate'
  | 'designer___series___models___monitorCount'
  | 'designer___series___models___connectors'
  | 'designer___series___models___HDCP'
  | 'designer___series___models___id'
  | 'designer___series___models___children'
  | 'designer___series___designer___id'
  | 'designer___series___designer___children'
  | 'designer___series___designer___name'
  | 'designer___series___designer___website'
  | 'designer___series___designer___series'
  | 'designer___series___designer___models'
  | 'designer___series___website'
  | 'designer___series___fields___designer'
  | 'designer___models'
  | 'designer___models___series___id'
  | 'designer___models___series___children'
  | 'designer___models___series___name'
  | 'designer___models___series___architecture'
  | 'designer___models___series___releaseDate'
  | 'designer___models___series___models'
  | 'designer___models___series___website'
  | 'designer___models___name'
  | 'designer___models___releaseDate'
  | 'designer___models___gpuEngine___nvidiaCUDACores'
  | 'designer___models___gpuEngine___boostClockGhz'
  | 'designer___models___memory___standardConfigSizeGB'
  | 'designer___models___memory___standardConfigSpec'
  | 'designer___models___memory___interfaceBandwidthBit'
  | 'designer___models___display___monitorCount'
  | 'designer___models___monitorCount'
  | 'designer___models___connectors'
  | 'designer___models___connectors___name'
  | 'designer___models___connectors___count'
  | 'designer___models___HDCP'
  | 'designer___models___fields___slug'
  | 'designer___models___fields___designer'
  | 'designer___models___id'
  | 'designer___models___parent___id'
  | 'designer___models___parent___children'
  | 'designer___models___children'
  | 'designer___models___children___id'
  | 'designer___models___children___children'
  | 'designer___models___internal___content'
  | 'designer___models___internal___contentDigest'
  | 'designer___models___internal___description'
  | 'designer___models___internal___fieldOwners'
  | 'designer___models___internal___ignoreType'
  | 'designer___models___internal___mediaType'
  | 'designer___models___internal___owner'
  | 'designer___models___internal___type'
  | 'website'
  | 'fields___designer';

export type SeriesFieldsFilterInput = {
  designer?: Maybe<StringQueryOperatorInput>;
};

export type SeriesFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  architecture?: Maybe<StringQueryOperatorInput>;
  releaseDate?: Maybe<DateQueryOperatorInput>;
  models?: Maybe<ModelsFilterListInput>;
  designer?: Maybe<DesignerFilterInput>;
  website?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<SeriesFieldsFilterInput>;
};

export type SeriesFilterListInput = {
  elemMatch?: Maybe<SeriesFilterInput>;
};

export type SeriesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SeriesEdge>;
  nodes: Array<Series>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SeriesSortInput = {
  fields?: Maybe<Array<Maybe<SeriesFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  mapping?: Maybe<SiteMapping>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'mapping___allModelsJson_nodes_series'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  mapping?: Maybe<SiteMappingFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteMapping = {
  allModelsJson_nodes_series?: Maybe<Scalars['String']>;
};

export type SiteMappingFilterInput = {
  allModelsJson_nodes_series?: Maybe<StringQueryOperatorInput>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___slug'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___aliases____'
  | 'pluginCreator___pluginOptions___aliases____x'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___fonts___family'
  | 'pluginCreator___pluginOptions___fonts___subsets'
  | 'pluginCreator___pluginOptions___fonts___variants'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___aliases____'
  | 'pluginOptions___aliases____x'
  | 'pluginOptions___extensions'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fonts'
  | 'pluginOptions___fonts___family'
  | 'pluginOptions___fonts___subsets'
  | 'pluginOptions___fonts___variants'
  | 'pluginOptions___fileName'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  aliases?: Maybe<SitePluginPluginOptionsAliases>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>;
  fileName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsAliases = {
  _?: Maybe<Scalars['String']>;
  _x?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsAliasesFilterInput = {
  _?: Maybe<StringQueryOperatorInput>;
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  aliases?: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  family?: Maybe<Scalars['String']>;
  subsets?: Maybe<Array<Maybe<Scalars['String']>>>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  subsets?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { placeholderImage?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexPageQuery = { recentModels: Array<(
    Pick<Models, 'id' | 'name' | 'releaseDate'>
    & { fields?: Maybe<Pick<ModelsFields, 'slug'>>, series?: Maybe<(
      Pick<Series, 'id'>
      & { designer?: Maybe<(
        Pick<Designer, 'name' | 'website' | 'id'>
        & { fullSVG?: Maybe<Pick<File, 'publicURL'>> }
      )> }
    )> }
  )>, recentSeries: Array<(
    Pick<Series, 'id' | 'name' | 'releaseDate' | 'architecture' | 'website'>
    & { designer?: Maybe<(
      Pick<Designer, 'name' | 'website' | 'id'>
      & { fullSVG?: Maybe<Pick<File, 'publicURL'>> }
    )> }
  )>, allDesigner: (
    Pick<DesignerConnection, 'distinct'>
    & { nodes: Array<(
      Pick<Designer, 'name' | 'id'>
      & { fullSVG?: Maybe<Pick<File, 'publicURL'>> }
    )> }
  ) };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { site?: Maybe<Pick<Site, 'buildTime'>> };

export type DesignerPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type DesignerPageQueryQuery = { designer?: Maybe<(
    Pick<Designer, 'id' | 'name' | 'website'>
    & { fullSVG?: Maybe<Pick<File, 'publicURL'>>, series?: Maybe<Array<Maybe<Pick<Series, 'id' | 'name' | 'releaseDate'>>>>, models?: Maybe<Array<Maybe<Pick<Models, 'id' | 'name' | 'releaseDate'>>>> }
  )> };

export type ModelsPageQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ModelsPageQueryQuery = { models?: Maybe<(
    Pick<Models, 'id' | 'name' | 'releaseDate' | 'monitorCount'>
    & { fields?: Maybe<Pick<ModelsFields, 'slug'>>, gpuEngine?: Maybe<Pick<GpuEngineSpec, 'boostClockGhz' | 'nvidiaCUDACores'>>, memory?: Maybe<Pick<MemorySpec, 'interfaceBandwidthBit' | 'standardConfigSizeGB' | 'standardConfigSpec'>>, series?: Maybe<(
      Pick<Series, 'id' | 'name' | 'releaseDate'>
      & { designer?: Maybe<(
        Pick<Designer, 'id' | 'name' | 'website'>
        & { fullSVG?: Maybe<Pick<File, 'publicURL'>> }
      )> }
    )> }
  )> };

export type SeriesPageQueryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SeriesPageQueryQuery = { series?: Maybe<(
    Pick<Series, 'id' | 'name' | 'website' | 'releaseDate'>
    & { designer?: Maybe<(
      Pick<Designer, 'id' | 'name' | 'website'>
      & { fullSVG?: Maybe<Pick<File, 'publicURL'>> }
    )>, models?: Maybe<Array<Maybe<(
      Pick<Models, 'id' | 'name' | 'releaseDate'>
      & { fields?: Maybe<Pick<ModelsFields, 'slug'>> }
    )>>> }
  )> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
