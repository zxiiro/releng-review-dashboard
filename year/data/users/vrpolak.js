userdata['vrpolak'] = {
  "identity": ids["vrpolak"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1502481302000,
  "lastActiveDate": 1507424551000,
  "activeDayCount": 3,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ifeddbb2fcde7d56b768ca8d31bcc3eeb1050ff1d",
      "commitNumber": 6716,
      "subject": "Do not trigger on drafts before Publish",
      "owner": ids["vrpolak"],
      "url": "https://gerrit.linuxfoundation.org/infra/6716",
      "commitMessage": "Do not trigger on drafts before Publish\n\nThis way, uploading drafts will tie less resources.\nContributors can still recheck drafts manually\nif they want them verified before hitting the Publish button.\n\nChange-Id: Ifeddbb2fcde7d56b768ca8d31bcc3eeb1050ff1d\nSigned-off-by: Vratko Polak \u003cvrpolak@cisco.com\u003e\n",
      "createdOnDate": 1507300963000,
      "lastUpdatedDate": 1507424551000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["vrpolak"]
      ],
      "comments": [
        {
          "timestamp": 1507300963000,
          "reviewer": ids["vrpolak"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1507300973000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/429/"
        },
        {
          "timestamp": 1507301025000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 1:\n\nSee https://gerrit.linuxfoundation.org/infra/#/c/5837/5/jjb/lf-maven-jobs.yaml@315"
        },
        {
          "timestamp": 1507301174000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/429/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/429/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/429"
        },
        {
          "timestamp": 1507301329000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1507301369000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1507301461000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/430/"
        },
        {
          "timestamp": 1507301484000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nSo the global-jjb tox jobs does this annoying thing where it checks for changes in xml against expected-xml and forces the contributor to update expected xml files.\n\nI\u0027m starting to feel like not only is this inconvenient but makes it hard to contribute. I do like that it lets us know when patches are changing XML though.\n\nI wonder if there\u0027s a better way we can report that information then failing a contributor\u0027s build."
        },
        {
          "timestamp": 1507301637000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/430/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/430"
        },
        {
          "timestamp": 1507304489000,
          "reviewer": ids["vrpolak"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1507304544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/431/"
        },
        {
          "timestamp": 1507304650000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 4: Code-Review-1\n\nI failed at rebasing. Let me try again."
        },
        {
          "timestamp": 1507304755000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/431/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/431/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/431"
        },
        {
          "timestamp": 1507304765000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 4: -Code-Review\n\nNope, I failed at reviewing whether my rebase was correct. It is."
        },
        {
          "timestamp": 1507304964000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 4: Code-Review-1\n\nNope. My original edits are there, but somehow now there are more files to edit. Patch set #3 was rignt."
        },
        {
          "timestamp": 1507305122000,
          "reviewer": ids["vrpolak"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1507305170000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/432/"
        },
        {
          "timestamp": 1507305368000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/432/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/432"
        },
        {
          "timestamp": 1507305545000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 5:\n\nNow it looks good.\n\n\u003e it checks for changes in xml against expected-xml\n\nI actually like that. It can still be improved.\nStep 1: Have a script that re-generates the expected values.\nStep 2: Hook that script to git-review somehow, so that it applies automatically before upload (not sure if that is compatible with Signed-off-by usage).\n\nKeep the check to catch people which avoid the hook. The role of the auto-generated examples would be to show committers the real new xmls."
        },
        {
          "timestamp": 1507424549000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review+2"
        },
        {
          "timestamp": 1507424551000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "89aa0eb5f5a0195db0047eae1743f3c560cf6856",
          "parents": [
            "9d7f89418b6fe13020625efdfdad692f911b57c6"
          ],
          "ref": "refs/changes/16/6716/1",
          "uploader": ids["vrpolak"],
          "createdOnDate": 1507300963000,
          "author": ids["vrpolak"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1507301174000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "ba0cf5d462a78f746bfd6334109d5a4361cfa861",
          "parents": [
            "4e494e6bf70108968f052cd4ce1d8379fee04a43"
          ],
          "ref": "refs/changes/16/6716/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1507301329000,
          "author": ids["vrpolak"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "4f855abc6713d9d6c58123ebb1bfaed17e432631",
          "parents": [
            "4e494e6bf70108968f052cd4ce1d8379fee04a43"
          ],
          "ref": "refs/changes/16/6716/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1507301369000,
          "author": ids["vrpolak"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1507301637000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -12
        },
        {
          "number": 4,
          "revision": "635bbe9b751108a7b21a889b39fab522f6971ff6",
          "parents": [
            "4e494e6bf70108968f052cd4ce1d8379fee04a43"
          ],
          "ref": "refs/changes/16/6716/4",
          "uploader": ids["vrpolak"],
          "createdOnDate": 1507304489000,
          "author": ids["vrpolak"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1507304755000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1507304964000,
              "grantedBy": ids["vrpolak"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -6
        },
        {
          "number": 5,
          "revision": "0ea9b36c7eb7f0cc9a3e9d6ab324685ebf1a8592",
          "parents": [
            "4e494e6bf70108968f052cd4ce1d8379fee04a43"
          ],
          "ref": "refs/changes/16/6716/5",
          "uploader": ids["vrpolak"],
          "createdOnDate": 1507305122000,
          "author": ids["vrpolak"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1507424549000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1507424551000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1507305368000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -12
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I52d05808f1f84fee37e41f68677136ee105ba48c",
      "commitNumber": 5837,
      "subject": "Migrate Maven Verify job template",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/5837",
      "commitMessage": "Migrate Maven Verify job template\n\nThis patch uses the OpenDaylight Maven Verify job as the original base\nand modifies it to be more generically used in global-jjb.\n\nChanges from original template:\n\n- Support overriding the default Gerrit Triggers.\n- Use the mvn deploy goal rather than install goal. End result is the\n  same only the job copies artifacts to a staging directory in case we\n  need it.\n- File paths can now be overrided in case a project wants to be more\n  specific on which files to build against.\n\nIssue: RELENG-244\nChange-Id: I52d05808f1f84fee37e41f68677136ee105ba48c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1502398563000,
      "lastUpdatedDate": 1507301103000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["agrimberg"],
        ids["vrpolak"]
      ],
      "comments": [
        {
          "timestamp": 1502398563000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1502398611000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/"
        },
        {
          "timestamp": 1502398830000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/245"
        },
        {
          "timestamp": 1502422689000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1502422746000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/247/"
        },
        {
          "timestamp": 1502422966000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/247/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/247"
        },
        {
          "timestamp": 1502423070000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1502423118000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/250/"
        },
        {
          "timestamp": 1502423351000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/250/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/250"
        },
        {
          "timestamp": 1502426594000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1502426718000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)\n\nThis is basically ready to go and successfully tested using odlparent but I\u0027m not happy with the quality of documentation here so leaving as draft until I can address that."
        },
        {
          "timestamp": 1502426726000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/"
        },
        {
          "timestamp": 1502426819000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n(1 comment)"
        },
        {
          "timestamp": 1502426954000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/254"
        },
        {
          "timestamp": 1502481302000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1502481350000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/268/"
        },
        {
          "timestamp": 1502481575000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/268/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/268"
        },
        {
          "timestamp": 1502810225000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 5: Code-Review+2"
        },
        {
          "timestamp": 1502810227000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1507300757000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1507301045000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1507301103000,
          "reviewer": ids["vrpolak"],
          "message": "Patch Set 5:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "af75ff750c42f7e020c4f73e52eb02f59e3cc8f7",
          "parents": [
            "aac734585a5302a26a33ea34f03d0b66c96ed7f0"
          ],
          "ref": "refs/changes/37/5837/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1502398563000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1502398830000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 124,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "7b7f52aa5aa439fe737c03730c6d8d4ee74e8dac",
          "parents": [
            "65cbc5287e4353f83cb60273c43c36635a56474d"
          ],
          "ref": "refs/changes/37/5837/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1502422689000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1502422966000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 125,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "0372074275f79beec284f8f25114d9e4c5c89e35",
          "parents": [
            "9d7f89418b6fe13020625efdfdad692f911b57c6"
          ],
          "ref": "refs/changes/37/5837/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1502423070000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1502423351000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 122,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "5da527fe9496843b4081de67ecf7441dff0bdaba",
          "parents": [
            "9d7f89418b6fe13020625efdfdad692f911b57c6"
          ],
          "ref": "refs/changes/37/5837/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1502426594000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1502426718000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1502426954000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 7,
              "reviewer": ids["zxiiro"],
              "message": "Please provide more details on any modifications made to the template while porting from the ODL project template.",
              "patchSetTimestamp": 1502426594000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 278,
              "reviewer": ids["zxiiro"],
              "message": "Not happy with the level of documentation here. This template has significantly more variables than what\u0027s actually documented here. We should be documenting everything in the default parameters list.",
              "patchSetTimestamp": 1502426594000
            }
          ],
          "sizeInsertions": 155,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "6c848c0ea4efe7d3354923c75be2d3583352ec4e",
          "parents": [
            "9d7f89418b6fe13020625efdfdad692f911b57c6"
          ],
          "ref": "refs/changes/37/5837/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1502481302000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1502810225000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1502810227000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1502481575000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 315,
              "reviewer": ids["vrpolak"],
              "message": "In OpenDaylight there was a discussion, which converged [0] on \"true\" here. Is there anybody who wishes to verify draft both on Upload and on Publish (without any commit difference at all)?\n\nBTW, \"false\" in line 317 is OK since tox jobs run CommitBear.\n\n[0] https://git.opendaylight.org/gerrit/46043",
              "patchSetTimestamp": 1502481302000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 315,
              "reviewer": ids["zxiiro"],
              "message": "Right plus you can recheck if you really want it. I\u0027m fine with changing this to true across all of global-jjb jobs. The other thing is these are overrideable so let\u0027s follow the OpenDaylight standard here of not building drafts by default.",
              "patchSetTimestamp": 1502481302000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 315,
              "reviewer": ids["vrpolak"],
              "message": "Contributed https://gerrit.linuxfoundation.org/infra/6716",
              "patchSetTimestamp": 1502481302000
            }
          ],
          "sizeInsertions": 1300,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 2,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I52d05808f1f84fee37e41f68677136ee105ba48c",
        "commitNumber": 5837,
        "subject": "Migrate Maven Verify job template",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/5837",
        "commitMessage": "Migrate Maven Verify job template\n\nThis patch uses the OpenDaylight Maven Verify job as the original base\nand modifies it to be more generically used in global-jjb.\n\nChanges from original template:\n\n- Support overriding the default Gerrit Triggers.\n- Use the mvn deploy goal rather than install goal. End result is the\n  same only the job copies artifacts to a staging directory in case we\n  need it.\n- File paths can now be overrided in case a project wants to be more\n  specific on which files to build against.\n\nIssue: RELENG-244\nChange-Id: I52d05808f1f84fee37e41f68677136ee105ba48c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1502398563000,
        "lastUpdatedDate": 1507301103000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["zxiiro"],
          ids["agrimberg"],
          ids["vrpolak"]
        ],
        "comments": [
          {
            "timestamp": 1502398563000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1502398611000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/"
          },
          {
            "timestamp": 1502398830000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/245/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/245"
          },
          {
            "timestamp": 1502422689000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1502422746000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/247/"
          },
          {
            "timestamp": 1502422966000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/247/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/247"
          },
          {
            "timestamp": 1502423070000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1502423118000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/250/"
          },
          {
            "timestamp": 1502423351000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/250/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/250"
          },
          {
            "timestamp": 1502426594000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1502426718000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\n(1 comment)\n\nThis is basically ready to go and successfully tested using odlparent but I\u0027m not happy with the quality of documentation here so leaving as draft until I can address that."
          },
          {
            "timestamp": 1502426726000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/"
          },
          {
            "timestamp": 1502426819000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4:\n\n(1 comment)"
          },
          {
            "timestamp": 1502426954000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/254/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/254"
          },
          {
            "timestamp": 1502481302000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1502481350000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/268/"
          },
          {
            "timestamp": 1502481575000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/268/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/268"
          },
          {
            "timestamp": 1502810225000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 5: Code-Review+2"
          },
          {
            "timestamp": 1502810227000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1507300757000,
            "reviewer": ids["vrpolak"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1507301045000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5:\n\n(1 comment)"
          },
          {
            "timestamp": 1507301103000,
            "reviewer": ids["vrpolak"],
            "message": "Patch Set 5:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "af75ff750c42f7e020c4f73e52eb02f59e3cc8f7",
            "parents": [
              "aac734585a5302a26a33ea34f03d0b66c96ed7f0"
            ],
            "ref": "refs/changes/37/5837/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1502398563000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1502398830000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 124,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "7b7f52aa5aa439fe737c03730c6d8d4ee74e8dac",
            "parents": [
              "65cbc5287e4353f83cb60273c43c36635a56474d"
            ],
            "ref": "refs/changes/37/5837/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1502422689000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1502422966000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 125,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "0372074275f79beec284f8f25114d9e4c5c89e35",
            "parents": [
              "9d7f89418b6fe13020625efdfdad692f911b57c6"
            ],
            "ref": "refs/changes/37/5837/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1502423070000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1502423351000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 122,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "5da527fe9496843b4081de67ecf7441dff0bdaba",
            "parents": [
              "9d7f89418b6fe13020625efdfdad692f911b57c6"
            ],
            "ref": "refs/changes/37/5837/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1502426594000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1502426718000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1502426954000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 7,
                "reviewer": ids["zxiiro"],
                "message": "Please provide more details on any modifications made to the template while porting from the ODL project template.",
                "patchSetTimestamp": 1502426594000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 278,
                "reviewer": ids["zxiiro"],
                "message": "Not happy with the level of documentation here. This template has significantly more variables than what\u0027s actually documented here. We should be documenting everything in the default parameters list.",
                "patchSetTimestamp": 1502426594000
              }
            ],
            "sizeInsertions": 155,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "6c848c0ea4efe7d3354923c75be2d3583352ec4e",
            "parents": [
              "9d7f89418b6fe13020625efdfdad692f911b57c6"
            ],
            "ref": "refs/changes/37/5837/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1502481302000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1502810225000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1502810227000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1502481575000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 315,
                "reviewer": ids["vrpolak"],
                "message": "In OpenDaylight there was a discussion, which converged [0] on \"true\" here. Is there anybody who wishes to verify draft both on Upload and on Publish (without any commit difference at all)?\n\nBTW, \"false\" in line 317 is OK since tox jobs run CommitBear.\n\n[0] https://git.opendaylight.org/gerrit/46043",
                "patchSetTimestamp": 1502481302000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 315,
                "reviewer": ids["zxiiro"],
                "message": "Right plus you can recheck if you really want it. I\u0027m fine with changing this to true across all of global-jjb jobs. The other thing is these are overrideable so let\u0027s follow the OpenDaylight standard here of not building drafts by default.",
                "patchSetTimestamp": 1502481302000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 315,
                "reviewer": ids["vrpolak"],
                "message": "Contributed https://gerrit.linuxfoundation.org/infra/6716",
                "patchSetTimestamp": 1502481302000
              }
            ],
            "sizeInsertions": 1300,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 315,
          "reviewer": ids["vrpolak"],
          "message": "In OpenDaylight there was a discussion, which converged [0] on \"true\" here. Is there anybody who wishes to verify draft both on Upload and on Publish (without any commit difference at all)?\n\nBTW, \"false\" in line 317 is OK since tox jobs run CommitBear.\n\n[0] https://git.opendaylight.org/gerrit/46043",
          "patchSetTimestamp": 1502481302000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 315,
          "reviewer": ids["vrpolak"],
          "message": "Contributed https://gerrit.linuxfoundation.org/infra/6716",
          "patchSetTimestamp": 1502481302000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
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
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 123588000,
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
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};