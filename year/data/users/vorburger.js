userdata['vorburger'] = {
  "identity": ids["vorburger"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1516112758000,
  "lastActiveDate": 1516126367000,
  "activeDayCount": 1,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0628cb5c7185e2143e448ceb4fa4752384581a5e",
      "commitNumber": 12318,
      "subject": "Add option to stage to Maven Central",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12318",
      "commitMessage": "Add option to stage to Maven Central\n\nProvide an option to also stage to OSSRH in preparation to release\nto Maven Central.\n\nIn addition to printing the staging repo-id also print the URL to\nthe staging repo for convenience in stage-repo.txt.\n\nNOTE: This patch introduces a breaking change to\n      lf-infra-maven-parameters to introduce a new boolean parameter\n      mvn-central. Job templates using this macro will need to add\n      \u0027mvn-central: false\u0027 to their list of passed parameters.\n\nIssue: https://jira.opendaylight.org/browse/RELENG-28\nChange-Id: I0628cb5c7185e2143e448ceb4fa4752384581a5e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534611026000,
      "lastUpdatedDate": 1534872533000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["rovarga"],
        ids["vorburger"],
        ids["zxiiro"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534611026000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534611095000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/"
        },
        {
          "timestamp": 1534611230000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/716/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/716"
        },
        {
          "timestamp": 1534611403000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534611505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/"
        },
        {
          "timestamp": 1534611661000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/717/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/717"
        },
        {
          "timestamp": 1534611835000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534612068000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/"
        },
        {
          "timestamp": 1534612216000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/718/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/718"
        },
        {
          "timestamp": 1534613078000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1534613134000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534613157000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/"
        },
        {
          "timestamp": 1534613322000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/719/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/719"
        },
        {
          "timestamp": 1534614761000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1534614857000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-2\n\nMy comments above should be addressed but additionally it looks like OSSRH will fail your staging repo if you are missing:\n\n1. source.jars\n2. javadoc.jars\n3. gpg signatures\n\nItem\u0027s 1 \u0026 2 are good for. Item 3 we need to get Sigul in place to automate this process."
        },
        {
          "timestamp": 1534614965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/"
        },
        {
          "timestamp": 1534615136000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/720/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/720"
        },
        {
          "timestamp": 1534620082000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1534872533000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1d428aba011436628e4542b483a6f97250f23cb1",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611026000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534611230000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 21,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "58f08491b03a624c9be6a84096c5b23f4d17409d",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611403000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534611661000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 23,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "03b3e986b9b8bb0636d747f3bb2fc538f48e3a97",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534611835000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534612216000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 4,
          "revision": "8ba8da20fa5e7714cebded68f2082038b478a6ae",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534613078000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534613134000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534613322000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "Maybe instead of forcing this on everyone. We should make it apply only to the staging job.",
              "patchSetTimestamp": 1534613078000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 134,
              "reviewer": ids["zxiiro"],
              "message": "need to make sure we document this in the RST files.",
              "patchSetTimestamp": 1534613078000
            }
          ],
          "sizeInsertions": 30,
          "sizeDeletions": -7
        },
        {
          "number": 5,
          "revision": "408fc151bf74ae36e1610e3b7c20ad33898f49cb",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/18/12318/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534614761000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534620082000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1534614857000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534615136000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["agrimberg"],
              "message": "This is hard coding a Maven Central Nexus staging ID. I would expect that we should be ending up with a different ID per project that we setup for Maven Central push",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "Yep this is the generic Profile ID that every OSSRH account get\u0027s access to. I was waiting for confirmation from the admins to see if we get our own special Profile ID or not.\n\nThe answer is yes we do so we\u0027ll need to make this configurable.",
              "patchSetTimestamp": 1534614761000
            },
            {
              "file": "shell/maven-stage.sh",
              "line": 41,
              "reviewer": ids["agrimberg"],
              "message": "This is the same as lines 25 - 32 just with some different parameters. as such, I think that lines 25 - 32 should be functionalized and then called with the needed parameters.",
              "patchSetTimestamp": 1534614761000
            }
          ],
          "sizeInsertions": 36,
          "sizeDeletions": -8
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I18e85f859fbba088ab338672f4fb28e7a02787af",
      "commitNumber": 8399,
      "subject": "Set default archive patterns for maven-verify",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8399",
      "commitMessage": "Set default archive patterns for maven-verify\n\nAdds some default archive patterns for the maven-verify job\ntemplate.\n\nChange-Id: I18e85f859fbba088ab338672f4fb28e7a02787af\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516112626000,
      "lastUpdatedDate": 1516158168000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"],
        ids["vorburger"]
      ],
      "comments": [
        {
          "timestamp": 1516112626000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516112758000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1516112855000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/182/"
        },
        {
          "timestamp": 1516113059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/182/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/182"
        },
        {
          "timestamp": 1516113196000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nMaybe we can use anchors to apply the same list to every template."
        },
        {
          "timestamp": 1516123835000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1516123970000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/183/"
        },
        {
          "timestamp": 1516124371000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/183/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/183"
        },
        {
          "timestamp": 1516126367000,
          "reviewer": ids["vorburger"],
          "message": "Patch Set 3: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1516132418000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1516158166000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1516158168000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2c9ef8127509da40234d26c5ad9b1cd7a6208657",
          "parents": [
            "c00e75c79a275db041585fe532ab0a36169c3c38"
          ],
          "ref": "refs/changes/99/8399/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516112626000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "2ea4a194fa4c6b4a746708c40d0f90b572677e8b",
          "parents": [
            "c00e75c79a275db041585fe532ab0a36169c3c38"
          ],
          "ref": "refs/changes/99/8399/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516112758000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1516113196000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1516113059000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 840,
              "reviewer": ids["vorburger"],
              "message": "our main need is to preserve karaf.log (target/exam/*/data/log/karaf.log) in all ODL projects, which this would do, so OK for me.. but of course you\u0027re possibly archiving a lot more more, if that\u0027s not an issue for you on the infra side, then go for it!",
              "patchSetTimestamp": 1516112758000
            }
          ],
          "sizeInsertions": 6,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "ac158d4c6fe40b2f159b11abb6d3f51bd32c4651",
          "parents": [
            "c00e75c79a275db041585fe532ab0a36169c3c38"
          ],
          "ref": "refs/changes/99/8399/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516123835000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1516158166000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1516158168000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1516124371000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1516132418000,
              "grantedBy": ids["jluhrsen"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1516126367000,
              "grantedBy": ids["vorburger"]
            }
          ],
          "comments": [],
          "sizeInsertions": 15,
          "sizeDeletions": -8
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 1,
        "commentCount": 1,
        "approvals": {
          "1": 1
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I18e85f859fbba088ab338672f4fb28e7a02787af",
        "commitNumber": 8399,
        "subject": "Set default archive patterns for maven-verify",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/8399",
        "commitMessage": "Set default archive patterns for maven-verify\n\nAdds some default archive patterns for the maven-verify job\ntemplate.\n\nChange-Id: I18e85f859fbba088ab338672f4fb28e7a02787af\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1516112626000,
        "lastUpdatedDate": 1516158168000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["jluhrsen"],
          ids["vorburger"]
        ],
        "comments": [
          {
            "timestamp": 1516112626000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1516112758000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1516112855000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/182/"
          },
          {
            "timestamp": 1516113059000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/182/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/182"
          },
          {
            "timestamp": 1516113196000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\nMaybe we can use anchors to apply the same list to every template."
          },
          {
            "timestamp": 1516123835000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1516123970000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/183/"
          },
          {
            "timestamp": 1516124371000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/183/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/183"
          },
          {
            "timestamp": 1516126367000,
            "reviewer": ids["vorburger"],
            "message": "Patch Set 3: Code-Review+1\n\n(1 comment)"
          },
          {
            "timestamp": 1516132418000,
            "reviewer": ids["jluhrsen"],
            "message": "Patch Set 3: Code-Review+1"
          },
          {
            "timestamp": 1516158166000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1516158168000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "2c9ef8127509da40234d26c5ad9b1cd7a6208657",
            "parents": [
              "c00e75c79a275db041585fe532ab0a36169c3c38"
            ],
            "ref": "refs/changes/99/8399/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1516112626000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 6,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "2ea4a194fa4c6b4a746708c40d0f90b572677e8b",
            "parents": [
              "c00e75c79a275db041585fe532ab0a36169c3c38"
            ],
            "ref": "refs/changes/99/8399/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1516112758000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1516113196000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1516113059000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 840,
                "reviewer": ids["vorburger"],
                "message": "our main need is to preserve karaf.log (target/exam/*/data/log/karaf.log) in all ODL projects, which this would do, so OK for me.. but of course you\u0027re possibly archiving a lot more more, if that\u0027s not an issue for you on the infra side, then go for it!",
                "patchSetTimestamp": 1516112758000
              }
            ],
            "sizeInsertions": 6,
            "sizeDeletions": -1
          },
          {
            "number": 3,
            "revision": "ac158d4c6fe40b2f159b11abb6d3f51bd32c4651",
            "parents": [
              "c00e75c79a275db041585fe532ab0a36169c3c38"
            ],
            "ref": "refs/changes/99/8399/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1516123835000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1516158166000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1516158168000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1516124371000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1516132418000,
                "grantedBy": ids["jluhrsen"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1516126367000,
                "grantedBy": ids["vorburger"]
              }
            ],
            "comments": [],
            "sizeInsertions": 15,
            "sizeDeletions": -8
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 840,
          "reviewer": ids["vorburger"],
          "message": "our main need is to preserve karaf.log (target/exam/*/data/log/karaf.log) in all ODL projects, which this would do, so OK for me.. but of course you\u0027re possibly archiving a lot more more, if that\u0027s not an issue for you on the infra side, then go for it!",
          "patchSetTimestamp": 1516112758000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  },
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};